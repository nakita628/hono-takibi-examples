import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2MacrosDestroyManyRoute,
  deleteApiV2MacrosMacroIdRoute,
  getApiV2MacrosActionsRoute,
  getApiV2MacrosActiveRoute,
  getApiV2MacrosAttachmentsAttachmentIdContentRoute,
  getApiV2MacrosAttachmentsAttachmentIdRoute,
  getApiV2MacrosCategoriesRoute,
  getApiV2MacrosDefinitionsRoute,
  getApiV2MacrosGroupsRoute,
  getApiV2MacrosMacroIdApplyRoute,
  getApiV2MacrosMacroIdAttachmentsRoute,
  getApiV2MacrosMacroIdRoute,
  getApiV2MacrosMostUsedRoute,
  getApiV2MacrosNewRoute,
  getApiV2MacrosRoute,
  getApiV2MacrosSearchRoute,
  getApiV2TicketsTicketIdMacrosMacroIdApplyRoute,
  postApiV2MacrosAttachmentsRoute,
  postApiV2MacrosMacroIdAttachmentsRoute,
  postApiV2MacrosRoute,
  putApiV2MacrosMacroIdRoute,
  putApiV2MacrosUpdateManyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const macrosHandler = app
  .openapi(getApiV2MacrosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2MacrosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MacrosMacroIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2MacrosMacroIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2MacrosMacroIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MacrosMacroIdApplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MacrosMacroIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2MacrosMacroIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MacrosActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MacrosActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2MacrosAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MacrosAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MacrosAttachmentsAttachmentIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MacrosCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MacrosDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2MacrosDestroyManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MacrosGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MacrosMostUsedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MacrosNewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MacrosSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2MacrosUpdateManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdMacrosMacroIdApplyRoute, (c) => {
    throw new Error('Not implemented')
  })
