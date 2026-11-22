import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getReposOwnerRepoCodeQualityFindingsFindingNumberRoute,
  getReposOwnerRepoCodeQualityFindingsRoute,
  getReposOwnerRepoCodeQualitySetupRoute,
  patchReposOwnerRepoCodeQualitySetupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const codeQualityHandler = app
  .openapi(getReposOwnerRepoCodeQualityFindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodeQualityFindingsFindingNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodeQualitySetupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoCodeQualitySetupRoute, (c) => {
    throw new Error('Not implemented')
  })
