/**
 * @author Rommel Loayza
 */
import { Module } from '@nestjs/common';
import { ApplicationsGateway } from './applications.gateway';
import { NotificationsGateway } from './notifications.gateway';

@Module({
  providers: [ApplicationsGateway, NotificationsGateway],
})
export class EventsModule {

}
