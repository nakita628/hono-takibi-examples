import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2ChannelsWhatsappTemplatesLanguagesRoute,
  getApiV2ChannelsWhatsappTemplatesRoute,
  putApiV2ChannelsWhatsappTemplatesTemplateIdToggleRoute,
  putApiV2ChannelsWhatsappTemplatesToggleManyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const whatsAppTemplatesHandler = app
  .openapi(getApiV2ChannelsWhatsappTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ChannelsWhatsappTemplatesTemplateIdToggleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ChannelsWhatsappTemplatesLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ChannelsWhatsappTemplatesToggleManyRoute, (c) => {
    throw new Error('Not implemented')
  })
