import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsIdRoute,
  getV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsIdRoute,
  getV1ProjectsProjectIdSelfHostedDistributionCredentialsRoute,
  postV1ProjectsProjectIdSelfHostedDistributionCredentialsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const distributionCredentialsHandler = app
  .openapi(getV1ProjectsProjectIdSelfHostedDistributionCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectIdSelfHostedDistributionCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsIdRoute,
    (c) => {},
  )
  .openapi(
    deleteV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsIdRoute,
    (c) => {},
  )
