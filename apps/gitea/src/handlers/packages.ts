import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePackagesOwnerTypeNameRoute,
  deletePackagesOwnerTypeNameVersionRoute,
  getPackagesOwnerRoute,
  getPackagesOwnerTypeNameDashLatestRoute,
  getPackagesOwnerTypeNameRoute,
  getPackagesOwnerTypeNameVersionFilesRoute,
  getPackagesOwnerTypeNameVersionRoute,
  postPackagesOwnerTypeNameDashLinkRepoNameRoute,
  postPackagesOwnerTypeNameDashUnlinkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const packagesHandler = app
  .openapi(getPackagesOwnerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePackagesOwnerTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPackagesOwnerTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPackagesOwnerTypeNameDashLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPackagesOwnerTypeNameDashLinkRepoNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPackagesOwnerTypeNameDashUnlinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePackagesOwnerTypeNameVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPackagesOwnerTypeNameVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPackagesOwnerTypeNameVersionFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
