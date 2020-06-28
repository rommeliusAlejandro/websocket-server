/**
 * @author Rommel Loayza
 */
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Logger } from '@nestjs/common';

@WebSocketGateway({namespace: 'applications'})
export class ApplicationsGateway {

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('events')
  findAll(@MessageBody() data: any): Observable<WsResponse<number>> {
    Logger.debug(data);
    return from([1, 2, 3]).pipe(
      map(item => {
        return ({event: 'events', data: item})
      })
    );
  }

  @SubscribeMessage('identity')
  async identity(@MessageBody() data: number): Promise<number> {
    Logger.debug(data);
    return data;
  }
}
