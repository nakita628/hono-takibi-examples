import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1UsersUserIdGuidesMessagesArchivedRoute,
  getV1UsersUserIdGuidesChannelIdRoute,
  putV1UsersUserIdGuidesEngagementsResetRoute,
  putV1UsersUserIdGuidesMessagesArchivedRoute,
  putV1UsersUserIdGuidesMessagesInteractedRoute,
  putV1UsersUserIdGuidesMessagesMessageIdArchivedRoute,
  putV1UsersUserIdGuidesMessagesMessageIdInteractedRoute,
  putV1UsersUserIdGuidesMessagesMessageIdSeenRoute,
  putV1UsersUserIdGuidesMessagesSeenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const guidesHandler = app
  .openapi(putV1UsersUserIdGuidesMessagesInteractedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1UsersUserIdGuidesMessagesArchivedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1UsersUserIdGuidesMessagesArchivedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersUserIdGuidesChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1UsersUserIdGuidesEngagementsResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1UsersUserIdGuidesMessagesMessageIdArchivedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1UsersUserIdGuidesMessagesSeenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1UsersUserIdGuidesMessagesMessageIdSeenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1UsersUserIdGuidesMessagesMessageIdInteractedRoute, (c) => {
    throw new Error('Not implemented')
  })
