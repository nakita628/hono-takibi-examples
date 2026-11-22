import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteClustersClusterIdBrokerConfigsNameRoute,
  deleteClustersClusterIdBrokersBrokerIdConfigsNameRoute,
  deleteClustersClusterIdTopicsTopicNameConfigsNameRoute,
  getClustersClusterIdBrokerConfigsNameRoute,
  getClustersClusterIdBrokerConfigsRoute,
  getClustersClusterIdBrokersBrokerIdConfigsNameRoute,
  getClustersClusterIdBrokersBrokerIdConfigsRoute,
  getClustersClusterIdBrokersDashConfigsRoute,
  getClustersClusterIdTopicsDashConfigsRoute,
  getClustersClusterIdTopicsTopicNameConfigsNameRoute,
  getClustersClusterIdTopicsTopicNameConfigsRoute,
  postClustersClusterIdBrokerConfigsAlterRoute,
  postClustersClusterIdBrokersBrokerIdConfigsAlterRoute,
  postClustersClusterIdTopicsTopicNameConfigsAlterRoute,
  putClustersClusterIdBrokerConfigsNameRoute,
  putClustersClusterIdBrokersBrokerIdConfigsNameRoute,
  putClustersClusterIdTopicsTopicNameConfigsNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const configsV3Handler = app
  .openapi(getClustersClusterIdBrokerConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClustersClusterIdBrokerConfigsAlterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersClusterIdBrokerConfigsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putClustersClusterIdBrokerConfigsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteClustersClusterIdBrokerConfigsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersClusterIdBrokersDashConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersClusterIdBrokersBrokerIdConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClustersClusterIdBrokersBrokerIdConfigsAlterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersClusterIdBrokersBrokerIdConfigsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putClustersClusterIdBrokersBrokerIdConfigsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteClustersClusterIdBrokersBrokerIdConfigsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersClusterIdTopicsTopicNameConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClustersClusterIdTopicsTopicNameConfigsAlterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersClusterIdTopicsTopicNameConfigsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putClustersClusterIdTopicsTopicNameConfigsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteClustersClusterIdTopicsTopicNameConfigsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersClusterIdTopicsDashConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
