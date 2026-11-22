import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAttachmentPublicAttachmentPublicUUIDContentRoute,
  getPlaceLookupPlaceLookupIDPhotoPhotoIDContentRoute,
  getUserUserIDAttachmentAttachmentIDContentRoute,
  getUserUserIDCardCardIDExportStatementCardExportStatementCardIDContentRoute,
  getUserUserIDChatConversationChatConversationIDAttachmentAttachmentIDContentRoute,
  getUserUserIDExportAnnualOverviewExportAnnualOverviewIDContentRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDAttachmentAttachmentIDContentRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDCustomerStatementCustomerStatementIDContentRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDEventEventIDStatementStatementIDContentRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDExportRibExportRibIDContentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contentHandler = app
  .openapi(getAttachmentPublicAttachmentPublicUUIDContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlaceLookupPlaceLookupIDPhotoPhotoIDContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDAttachmentAttachmentIDContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDCardCardIDExportStatementCardExportStatementCardIDContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUserUserIDChatConversationChatConversationIDAttachmentAttachmentIDContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUserUserIDExportAnnualOverviewExportAnnualOverviewIDContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDAttachmentAttachmentIDContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDCustomerStatementCustomerStatementIDContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDEventEventIDStatementStatementIDContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDExportRibExportRibIDContentRoute, (c) => {
    throw new Error('Not implemented')
  })
