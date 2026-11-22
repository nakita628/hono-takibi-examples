import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4ProjectsIdPackagesHelmChannelChartsFileNameTgzRoute,
  getApiV4ProjectsIdPackagesHelmChannelIndexYamlRoute,
  postApiV4ProjectsIdPackagesHelmApiChannelChartsAuthorizeRoute,
  postApiV4ProjectsIdPackagesHelmApiChannelChartsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const packagesHelmHandler = app
  .openapi(getApiV4ProjectsIdPackagesHelmChannelIndexYamlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesHelmChannelChartsFileNameTgzRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdPackagesHelmApiChannelChartsAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdPackagesHelmApiChannelChartsRoute, (c) => {
    throw new Error('Not implemented')
  })
