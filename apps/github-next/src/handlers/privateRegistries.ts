import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrgsOrgPrivateRegistriesSecretNameRoute,
  getOrgsOrgPrivateRegistriesPublicKeyRoute,
  getOrgsOrgPrivateRegistriesRoute,
  getOrgsOrgPrivateRegistriesSecretNameRoute,
  patchOrgsOrgPrivateRegistriesSecretNameRoute,
  postOrgsOrgPrivateRegistriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const privateRegistriesHandler = app
  .openapi(getOrgsOrgPrivateRegistriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgPrivateRegistriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgPrivateRegistriesPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgPrivateRegistriesSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgPrivateRegistriesSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgPrivateRegistriesSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
