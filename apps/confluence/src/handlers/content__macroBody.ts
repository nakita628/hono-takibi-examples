import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertAsyncToRoute,
  getWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertToRoute,
  getWikiRestApiContentIdHistoryVersionMacroIdMacroIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const content__macroBodyHandler = app
  .openapi(getWikiRestApiContentIdHistoryVersionMacroIdMacroIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertAsyncToRoute, (c) => {
    throw new Error('Not implemented')
  })
