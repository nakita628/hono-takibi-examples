import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetNetworkFirewall20201112DescribeTLSInspectionConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetNetworkFirewall20201112DescribeTlsInspectionConfigurationHandler =
  app.openapi(postXAmzTargetNetworkFirewall20201112DescribeTLSInspectionConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
