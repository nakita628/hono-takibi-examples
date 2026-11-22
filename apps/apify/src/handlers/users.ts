import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2IntegrationsGitRoute,
  getV2UsersMeRoute,
  getV2UsersUserIdRoute,
  postV2IntegrationsGitProviderIdCreateRepoRoute,
  postV2IntegrationsGitProviderIdRegisterDeploymentKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getV2UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2IntegrationsGitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2IntegrationsGitProviderIdCreateRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2IntegrationsGitProviderIdRegisterDeploymentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
