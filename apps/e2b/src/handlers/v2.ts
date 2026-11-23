import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2SandboxesRoute,
  getV2SandboxesSandboxIDLogsRoute,
  getV2TemplatesRoute,
  getV2TemplatesTemplateIDRoute,
  patchV2TemplatesTemplateIDRoute,
  postV2SandboxesRoute,
  postV2SandboxesSandboxIDConnectRoute,
  postV2TemplatesTemplateIDBuildsBuildIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(postV2SandboxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SandboxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SandboxesSandboxIDLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SandboxesSandboxIDConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TemplatesTemplateIDBuildsBuildIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TemplatesTemplateIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2TemplatesTemplateIDRoute, (c) => {
    throw new Error('Not implemented')
  })
