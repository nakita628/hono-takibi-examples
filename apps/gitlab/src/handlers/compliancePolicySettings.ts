import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4AdminSecurityCompliancePolicySettingsRoute,
  patchApiV4ProjectsIdComplianceExternalControlsControlIdStatusRoute,
  putApiV4AdminSecurityCompliancePolicySettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const compliancePolicySettingsHandler = app
  .openapi(patchApiV4ProjectsIdComplianceExternalControlsControlIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4AdminSecurityCompliancePolicySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4AdminSecurityCompliancePolicySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
