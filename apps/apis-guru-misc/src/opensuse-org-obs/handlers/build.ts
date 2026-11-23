import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoRoute,
  getBuildProjectNameRepositoryNameArchitectureNamePackageNameBuildinfoRoute,
  getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameRoute,
  getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameViewFileinfoRoute,
  getBuildProjectNameRepositoryNameArchitectureNamePackageNameHistoryRoute,
  getBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatusRoute,
  getBuildProjectNameRepositoryNameArchitectureNamePackageNameLogRoute,
  getBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonRoute,
  getBuildProjectNameRepositoryNameArchitectureNamePackageNameRoute,
  getBuildProjectNameRepositoryNameArchitectureNamePackageNameStatusRoute,
  getBuildProjectNameRepositoryNameArchitectureNameRepositoryRoute,
  getBuildProjectNameRepositoryNameBuildconfigRoute,
  getBuildProjectNameRepositoryNameRoute,
  getBuildProjectNameResultRoute,
  getBuildProjectNameRoute,
  getBuildRoute,
  postBuildProjectNameRoute,
  putBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const buildHandler = app
  .openapi(getBuildRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBuildProjectNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBuildProjectNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBuildProjectNameResultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBuildProjectNameRepositoryNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBuildProjectNameRepositoryNameBuildconfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBuildProjectNameRepositoryNameArchitectureNameRepositoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBuildProjectNameRepositoryNameArchitectureNamePackageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBuildProjectNameRepositoryNameArchitectureNamePackageNameBuildinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBuildProjectNameRepositoryNameArchitectureNamePackageNameHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBuildProjectNameRepositoryNameArchitectureNamePackageNameLogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBuildProjectNameRepositoryNameArchitectureNamePackageNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameViewFileinfoRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
