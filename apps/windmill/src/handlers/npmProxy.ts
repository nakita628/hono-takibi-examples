import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWWorkspaceNpmProxyConfigRoute,
  getWWorkspaceNpmProxyFilePackageVersionFilepathRoute,
  getWWorkspaceNpmProxyFiletreePackageVersionRoute,
  getWWorkspaceNpmProxyMetadataPackageRoute,
  getWWorkspaceNpmProxyResolvePackageRoute,
  getWWorkspaceNpmProxyTarballPackageVersionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const npmProxyHandler = app
  .openapi(getWWorkspaceNpmProxyConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceNpmProxyMetadataPackageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceNpmProxyResolvePackageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceNpmProxyFiletreePackageVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceNpmProxyFilePackageVersionFilepathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceNpmProxyTarballPackageVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
