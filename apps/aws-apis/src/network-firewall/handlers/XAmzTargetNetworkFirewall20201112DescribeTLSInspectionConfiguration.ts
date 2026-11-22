import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetNetworkFirewall20201112DescribeTLSInspectionConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetNetworkFirewall20201112DescribeTLSInspectionConfigurationHandler =
  app.openapi(postXAmzTargetNetworkFirewall20201112DescribeTLSInspectionConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
