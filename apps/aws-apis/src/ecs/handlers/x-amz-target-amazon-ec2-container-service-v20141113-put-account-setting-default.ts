import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113PutAccountSettingDefaultRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonEc2ContainerServiceV20141113PutAccountSettingDefaultHandler =
  app.openapi(
    postXAmzTargetAmazonEC2ContainerServiceV20141113PutAccountSettingDefaultRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
