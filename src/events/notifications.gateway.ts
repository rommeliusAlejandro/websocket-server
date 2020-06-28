/**
 * @author Rommel Loayza
 */
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Logger } from '@nestjs/common';

@WebSocketGateway({namespace: 'notifications'})
export class NotificationsGateway {

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('bell')
  findAll(@MessageBody() data: any): Observable<WsResponse<string>> {
    Logger.debug(data);
    return from(['a', 'b', 'c']).pipe(
      map(item => {
        return ({event: 'bell', data: item})
      })
    );
  }

  @SubscribeMessage('lucy')
  async identity(@MessageBody() data: string): Promise<string> {
    Logger.debug(data);
    return 'caca '+data;
  }
}
