import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postPartnerSdkProvisionalAccountsUnmergeBotRoute,
  postPartnerSdkProvisionalAccountsUnmergeRoute,
  postPartnerSdkTokenBotRoute,
  postPartnerSdkTokenRoute,
  putPartnerSdkDmsUserId1UserId2MessagesMessageIdModerationMetadataRoute,
} from '../routes'

const app = new OpenAPIHono()

export const partnerSdkHandler = app
  .openapi(putPartnerSdkDmsUserId1UserId2MessagesMessageIdModerationMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPartnerSdkProvisionalAccountsUnmergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPartnerSdkProvisionalAccountsUnmergeBotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPartnerSdkTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPartnerSdkTokenBotRoute, (c) => {
    throw new Error('Not implemented')
  })
