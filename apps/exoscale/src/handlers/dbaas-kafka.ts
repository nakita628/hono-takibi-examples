import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDbaasKafkaNameRoute,
  deleteDbaasKafkaNameSchemaRegistryAclConfigAclIdRoute,
  deleteDbaasKafkaNameTopicAclConfigAclIdRoute,
  deleteDbaasKafkaServiceNameUserUsernameRoute,
  getDbaasKafkaNameAclConfigRoute,
  getDbaasKafkaNameRoute,
  getDbaasKafkaServiceNameConnectPasswordRevealRoute,
  getDbaasKafkaServiceNameUserUsernamePasswordRevealRoute,
  postDbaasKafkaNameRoute,
  postDbaasKafkaNameSchemaRegistryAclConfigRoute,
  postDbaasKafkaNameTopicAclConfigRoute,
  postDbaasKafkaServiceNameUserRoute,
  putDbaasKafkaNameMaintenanceStartRoute,
  putDbaasKafkaNameRoute,
  putDbaasKafkaServiceNameUserUsernamePasswordResetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dbaasKafkaHandler = app
  .openapi(getDbaasKafkaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasKafkaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasKafkaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasKafkaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasKafkaNameSchemaRegistryAclConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasKafkaServiceNameConnectPasswordRevealRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasKafkaServiceNameUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasKafkaNameTopicAclConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasKafkaNameSchemaRegistryAclConfigAclIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasKafkaServiceNameUserUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasKafkaServiceNameUserUsernamePasswordRevealRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasKafkaNameMaintenanceStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasKafkaNameAclConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasKafkaServiceNameUserUsernamePasswordResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasKafkaNameTopicAclConfigAclIdRoute, (c) => {
    throw new Error('Not implemented')
  })
