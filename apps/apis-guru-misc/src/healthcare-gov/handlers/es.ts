import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEsBlogPageNameMediaTypeExtensionRoute,
  getEsGlossaryPageNameMediaTypeExtensionRoute,
  getEsPageNameMediaTypeExtensionRoute,
  getEsQuestionPageNameMediaTypeExtensionRoute,
  getEsStateNameMediaTypeExtensionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const esHandler = app
  .openapi(getEsBlogPageNameMediaTypeExtensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEsGlossaryPageNameMediaTypeExtensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEsQuestionPageNameMediaTypeExtensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEsPageNameMediaTypeExtensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEsStateNameMediaTypeExtensionRoute, (c) => {
    throw new Error('Not implemented')
  })
