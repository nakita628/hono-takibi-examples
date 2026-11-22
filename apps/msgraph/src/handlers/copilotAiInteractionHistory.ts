import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCopilotInteractionHistoryRoute,
  getCopilotInteractionHistoryGetAllEnterpriseInteractionsRoute,
  getCopilotInteractionHistoryRoute,
  patchCopilotInteractionHistoryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const copilotAiInteractionHistoryHandler = app
  .openapi(getCopilotInteractionHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCopilotInteractionHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCopilotInteractionHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCopilotInteractionHistoryGetAllEnterpriseInteractionsRoute, (c) => {
    throw new Error('Not implemented')
  })
