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
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1CanceljobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CreatecomputeenvironmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CreatejobqueueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CreateschedulingpolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DeletecomputeenvironmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DeletejobqueueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DeleteschedulingpolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DeregisterjobdefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DescribecomputeenvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DescribejobdefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DescribejobqueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DescribejobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DescribeschedulingpoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ListjobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ListschedulingpoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TagsResourceArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TagsResourceArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RegisterjobdefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SubmitjobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TerminatejobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TagsResourceArnTagKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UpdatecomputeenvironmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UpdatejobqueueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UpdateschedulingpolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
