import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postIdentityApiConnectorsIdentityApiConnectorIdMicrosoftGraphUploadClientCertificateRoute,
  postIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsMicrosoftGraphSetOrderRoute,
} from '../routes'

const app = new OpenAPIHono()

export const identityActionsHandler = app
  .openapi(
    postIdentityApiConnectorsIdentityApiConnectorIdMicrosoftGraphUploadClientCertificateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsMicrosoftGraphSetOrderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
