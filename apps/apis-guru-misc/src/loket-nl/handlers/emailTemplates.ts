import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployerIdEmailtemplatesEmailTemplateIdRoute,
  getProvidersEmployersEmployerIdEmailtemplatesEmailTemplateIdRoute,
  getProvidersEmployersEmployerIdEmailtemplatesRoute,
  putProvidersEmployersEmployerIdEmailtemplatesEmailTemplateIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailTemplatesHandler = app
  .openapi(getProvidersEmployersEmployerIdEmailtemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProvidersEmployersEmployerIdEmailtemplatesEmailTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdEmailtemplatesEmailTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersEmployerIdEmailtemplatesEmailTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
