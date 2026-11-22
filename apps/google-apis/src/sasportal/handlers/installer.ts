import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1alpha1InstallerGenerateSecretRoute,
  postV1alpha1InstallerValidateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const installerHandler = app
  .openapi(postV1alpha1InstallerGenerateSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1InstallerValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
