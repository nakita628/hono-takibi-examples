import { OpenAPIHono } from '@hono/zod-openapi'
import {
  aclv3Handler,
  brokerV3Handler,
  clusterV3Handler,
  configsV3Handler,
  consumerGroupV3Handler,
  partitionV3Handler,
  recordsV3Handler,
  replicaV3Handler,
  topicV3Handler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', clusterV3Handler)
  .route('/', aclv3Handler)
  .route('/', configsV3Handler)
  .route('/', brokerV3Handler)
  .route('/', consumerGroupV3Handler)
  .route('/', topicV3Handler)
  .route('/', partitionV3Handler)
  .route('/', replicaV3Handler)
  .route('/', recordsV3Handler)

export default app
