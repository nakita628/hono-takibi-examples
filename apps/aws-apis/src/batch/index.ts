import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1TagsResourceArnTagKeysRoute,
  getV1TagsResourceArnRoute,
  postV1CanceljobRoute,
  postV1CreatecomputeenvironmentRoute,
  postV1CreatejobqueueRoute,
  postV1CreateschedulingpolicyRoute,
  postV1DeletecomputeenvironmentRoute,
  postV1DeletejobqueueRoute,
  postV1DeleteschedulingpolicyRoute,
  postV1DeregisterjobdefinitionRoute,
  postV1DescribecomputeenvironmentsRoute,
  postV1DescribejobdefinitionsRoute,
  postV1DescribejobqueuesRoute,
  postV1DescribejobsRoute,
  postV1DescribeschedulingpoliciesRoute,
  postV1ListjobsRoute,
  postV1ListschedulingpoliciesRoute,
  postV1RegisterjobdefinitionRoute,
  postV1SubmitjobRoute,
  postV1TagsResourceArnRoute,
  postV1TerminatejobRoute,
  postV1UpdatecomputeenvironmentRoute,
  postV1UpdatejobqueueRoute,
  postV1UpdateschedulingpolicyRoute,
} from './routes'
import {
  deleteV1TagsResourceArnTagKeysRouteHandler,
  getV1TagsResourceArnRouteHandler,
  postV1CanceljobRouteHandler,
  postV1CreatecomputeenvironmentRouteHandler,
  postV1CreatejobqueueRouteHandler,
  postV1CreateschedulingpolicyRouteHandler,
  postV1DeletecomputeenvironmentRouteHandler,
  postV1DeletejobqueueRouteHandler,
  postV1DeleteschedulingpolicyRouteHandler,
  postV1DeregisterjobdefinitionRouteHandler,
  postV1DescribecomputeenvironmentsRouteHandler,
  postV1DescribejobdefinitionsRouteHandler,
  postV1DescribejobqueuesRouteHandler,
  postV1DescribejobsRouteHandler,
  postV1DescribeschedulingpoliciesRouteHandler,
  postV1ListjobsRouteHandler,
  postV1ListschedulingpoliciesRouteHandler,
  postV1RegisterjobdefinitionRouteHandler,
  postV1SubmitjobRouteHandler,
  postV1TagsResourceArnRouteHandler,
  postV1TerminatejobRouteHandler,
  postV1UpdatecomputeenvironmentRouteHandler,
  postV1UpdatejobqueueRouteHandler,
  postV1UpdateschedulingpolicyRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1CanceljobRoute, postV1CanceljobRouteHandler)
  .openapi(postV1CreatecomputeenvironmentRoute, postV1CreatecomputeenvironmentRouteHandler)
  .openapi(postV1CreatejobqueueRoute, postV1CreatejobqueueRouteHandler)
  .openapi(postV1CreateschedulingpolicyRoute, postV1CreateschedulingpolicyRouteHandler)
  .openapi(postV1DeletecomputeenvironmentRoute, postV1DeletecomputeenvironmentRouteHandler)
  .openapi(postV1DeletejobqueueRoute, postV1DeletejobqueueRouteHandler)
  .openapi(postV1DeleteschedulingpolicyRoute, postV1DeleteschedulingpolicyRouteHandler)
  .openapi(postV1DeregisterjobdefinitionRoute, postV1DeregisterjobdefinitionRouteHandler)
  .openapi(postV1DescribecomputeenvironmentsRoute, postV1DescribecomputeenvironmentsRouteHandler)
  .openapi(postV1DescribejobdefinitionsRoute, postV1DescribejobdefinitionsRouteHandler)
  .openapi(postV1DescribejobqueuesRoute, postV1DescribejobqueuesRouteHandler)
  .openapi(postV1DescribejobsRoute, postV1DescribejobsRouteHandler)
  .openapi(postV1DescribeschedulingpoliciesRoute, postV1DescribeschedulingpoliciesRouteHandler)
  .openapi(postV1ListjobsRoute, postV1ListjobsRouteHandler)
  .openapi(postV1ListschedulingpoliciesRoute, postV1ListschedulingpoliciesRouteHandler)
  .openapi(getV1TagsResourceArnRoute, getV1TagsResourceArnRouteHandler)
  .openapi(postV1TagsResourceArnRoute, postV1TagsResourceArnRouteHandler)
  .openapi(postV1RegisterjobdefinitionRoute, postV1RegisterjobdefinitionRouteHandler)
  .openapi(postV1SubmitjobRoute, postV1SubmitjobRouteHandler)
  .openapi(postV1TerminatejobRoute, postV1TerminatejobRouteHandler)
  .openapi(deleteV1TagsResourceArnTagKeysRoute, deleteV1TagsResourceArnTagKeysRouteHandler)
  .openapi(postV1UpdatecomputeenvironmentRoute, postV1UpdatecomputeenvironmentRouteHandler)
  .openapi(postV1UpdatejobqueueRoute, postV1UpdatejobqueueRouteHandler)
  .openapi(postV1UpdateschedulingpolicyRoute, postV1UpdateschedulingpolicyRouteHandler)

export default app
