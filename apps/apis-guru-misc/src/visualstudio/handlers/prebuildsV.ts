import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2PrebuildsRepositoryRepoIdBranchBranchNameRoute,
  getApiV2PrebuildsTemplatesSkusRepoRepoIdBranchBranchNameHashPrebuildHashLocationLocationDevcontainerpathDevContainerPathRoute,
  postApiV2PrebuildsDeleteRoute,
  postApiV2PrebuildsTemplatesRoute,
  postApiV2PrebuildsTemplatesTemplateIdUpdatestatusRoute,
  postApiV2PrebuildsTemplatesUpdatemaxversionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const prebuildsVHandler = app
  .openapi(postApiV2PrebuildsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2PrebuildsRepositoryRepoIdBranchBranchNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2PrebuildsTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV2PrebuildsTemplatesSkusRepoRepoIdBranchBranchNameHashPrebuildHashLocationLocationDevcontainerpathDevContainerPathRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postApiV2PrebuildsTemplatesUpdatemaxversionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2PrebuildsTemplatesTemplateIdUpdatestatusRoute, (c) => {
    throw new Error('Not implemented')
  })
