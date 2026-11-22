import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployerIdDocumenttemplatesDocumentIdRoute,
  getProvidersEmployersEmployerIdDocumenttemplatesDocumentIdRoute,
  getProvidersEmployersEmployerIdDocumenttemplatesRoute,
  postProvidersEmployersEmployerIdDocumenttemplatesRoute,
  putProvidersEmployersEmployerIdDocumenttemplatesDocumentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const documentTemplateHandler = app
  .openapi(getProvidersEmployersEmployerIdDocumenttemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployerIdDocumenttemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProvidersEmployersEmployerIdDocumenttemplatesDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdDocumenttemplatesDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersEmployerIdDocumenttemplatesDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
