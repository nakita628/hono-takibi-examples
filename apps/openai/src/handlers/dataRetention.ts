import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrganizationDataRetentionRoute,
  getOrganizationProjectsProjectIdDataRetentionRoute,
  postOrganizationDataRetentionRoute,
  postOrganizationProjectsProjectIdDataRetentionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataRetentionHandler = app
  .openapi(getOrganizationDataRetentionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationDataRetentionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationProjectsProjectIdDataRetentionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationProjectsProjectIdDataRetentionRoute, (c) => {
    throw new Error('Not implemented')
  })
