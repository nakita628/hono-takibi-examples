import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAmazonclouddirectory20170111BatchreadXAmzDataPartitionRoute,
  postAmazonclouddirectory20170111DirectoryGetXAmzDataPartitionRoute,
  postAmazonclouddirectory20170111DirectoryListRoute,
  postAmazonclouddirectory20170111FacetAttributesXAmzDataPartitionRoute,
  postAmazonclouddirectory20170111FacetListXAmzDataPartitionRoute,
  postAmazonclouddirectory20170111FacetXAmzDataPartitionRoute,
  postAmazonclouddirectory20170111IndexTargetsXAmzDataPartitionRoute,
  postAmazonclouddirectory20170111ObjectAttributesGetXAmzDataPartitionRoute,
  postAmazonclouddirectory20170111ObjectAttributesXAmzDataPartitionRoute,
  postAmazonclouddirectory20170111ObjectChildrenXAmzDataPartitionRoute,
  postAmazonclouddirectory20170111ObjectIndicesXAmzDataPartitionRoute,
  postAmazonclouddirectory20170111ObjectInformationXAmzDataPartitionRoute,
  postAmazonclouddirectory20170111ObjectParentpathsXAmzDataPartitionRoute,
  postAmazonclouddirectory20170111ObjectParentXAmzDataPartitionRoute,
  postAmazonclouddirectory20170111ObjectPolicyXAmzDataPartitionRoute,
  postAmazonclouddirectory20170111PolicyAttachmentXAmzDataPartitionRoute,
  postAmazonclouddirectory20170111PolicyLookupXAmzDataPartitionRoute,
  postAmazonclouddirectory20170111SchemaAppliedRoute,
  postAmazonclouddirectory20170111SchemaDevelopmentRoute,
  postAmazonclouddirectory20170111SchemaGetappliedschemaRoute,
  postAmazonclouddirectory20170111SchemaJsonXAmzDataPartitionRoute,
  postAmazonclouddirectory20170111SchemaManagedRoute,
  postAmazonclouddirectory20170111SchemaPublishedRoute,
  postAmazonclouddirectory20170111TagsRoute,
  postAmazonclouddirectory20170111TypedlinkAttributesGetXAmzDataPartitionRoute,
  postAmazonclouddirectory20170111TypedlinkAttributesUpdateXAmzDataPartitionRoute,
  postAmazonclouddirectory20170111TypedlinkFacetAttributesXAmzDataPartitionRoute,
  postAmazonclouddirectory20170111TypedlinkFacetGetXAmzDataPartitionRoute,
  postAmazonclouddirectory20170111TypedlinkFacetListXAmzDataPartitionRoute,
  postAmazonclouddirectory20170111TypedlinkIncomingXAmzDataPartitionRoute,
  postAmazonclouddirectory20170111TypedlinkOutgoingXAmzDataPartitionRoute,
  putAmazonclouddirectory20170111BatchwriteXAmzDataPartitionRoute,
  putAmazonclouddirectory20170111DirectoryCreateXAmzDataPartitionRoute,
  putAmazonclouddirectory20170111DirectoryDisableXAmzDataPartitionRoute,
  putAmazonclouddirectory20170111DirectoryEnableXAmzDataPartitionRoute,
  putAmazonclouddirectory20170111DirectoryXAmzDataPartitionRoute,
  putAmazonclouddirectory20170111FacetCreateXAmzDataPartitionRoute,
  putAmazonclouddirectory20170111FacetDeleteXAmzDataPartitionRoute,
  putAmazonclouddirectory20170111FacetXAmzDataPartitionRoute,
  putAmazonclouddirectory20170111IndexAttachXAmzDataPartitionRoute,
  putAmazonclouddirectory20170111IndexDetachXAmzDataPartitionRoute,
  putAmazonclouddirectory20170111IndexXAmzDataPartitionRoute,
  putAmazonclouddirectory20170111ObjectAttachXAmzDataPartitionRoute,
  putAmazonclouddirectory20170111ObjectDeleteXAmzDataPartitionRoute,
  putAmazonclouddirectory20170111ObjectDetachXAmzDataPartitionRoute,
  putAmazonclouddirectory20170111ObjectFacetsDeleteXAmzDataPartitionRoute,
  putAmazonclouddirectory20170111ObjectFacetsXAmzDataPartitionRoute,
  putAmazonclouddirectory20170111ObjectUpdateXAmzDataPartitionRoute,
  putAmazonclouddirectory20170111ObjectXAmzDataPartitionRoute,
  putAmazonclouddirectory20170111PolicyAttachXAmzDataPartitionRoute,
  putAmazonclouddirectory20170111PolicyDetachXAmzDataPartitionRoute,
  putAmazonclouddirectory20170111SchemaApplyXAmzDataPartitionRoute,
  putAmazonclouddirectory20170111SchemaCreateRoute,
  putAmazonclouddirectory20170111SchemaJsonXAmzDataPartitionRoute,
  putAmazonclouddirectory20170111SchemaPublishXAmzDataPartitionRoute,
  putAmazonclouddirectory20170111SchemaUpdateXAmzDataPartitionRoute,
  putAmazonclouddirectory20170111SchemaUpgradeappliedRoute,
  putAmazonclouddirectory20170111SchemaUpgradepublishedRoute,
  putAmazonclouddirectory20170111SchemaXAmzDataPartitionRoute,
  putAmazonclouddirectory20170111TagsAddRoute,
  putAmazonclouddirectory20170111TagsRemoveRoute,
  putAmazonclouddirectory20170111TypedlinkAttachXAmzDataPartitionRoute,
  putAmazonclouddirectory20170111TypedlinkDetachXAmzDataPartitionRoute,
  putAmazonclouddirectory20170111TypedlinkFacetCreateXAmzDataPartitionRoute,
  putAmazonclouddirectory20170111TypedlinkFacetDeleteXAmzDataPartitionRoute,
  putAmazonclouddirectory20170111TypedlinkFacetXAmzDataPartitionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const amazonclouddirectoryHandler = app
  .openapi(putAmazonclouddirectory20170111ObjectFacetsXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAmazonclouddirectory20170111SchemaApplyXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAmazonclouddirectory20170111ObjectAttachXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAmazonclouddirectory20170111PolicyAttachXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAmazonclouddirectory20170111IndexAttachXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAmazonclouddirectory20170111TypedlinkAttachXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAmazonclouddirectory20170111BatchreadXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAmazonclouddirectory20170111BatchwriteXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAmazonclouddirectory20170111DirectoryCreateXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAmazonclouddirectory20170111FacetCreateXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAmazonclouddirectory20170111IndexXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAmazonclouddirectory20170111ObjectXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAmazonclouddirectory20170111SchemaCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAmazonclouddirectory20170111TypedlinkFacetCreateXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAmazonclouddirectory20170111DirectoryXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAmazonclouddirectory20170111FacetDeleteXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAmazonclouddirectory20170111ObjectDeleteXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAmazonclouddirectory20170111SchemaXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAmazonclouddirectory20170111TypedlinkFacetDeleteXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAmazonclouddirectory20170111IndexDetachXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAmazonclouddirectory20170111ObjectDetachXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAmazonclouddirectory20170111PolicyDetachXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAmazonclouddirectory20170111TypedlinkDetachXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAmazonclouddirectory20170111DirectoryDisableXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAmazonclouddirectory20170111DirectoryEnableXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAmazonclouddirectory20170111SchemaGetappliedschemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAmazonclouddirectory20170111DirectoryGetXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAmazonclouddirectory20170111FacetXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAmazonclouddirectory20170111FacetXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAmazonclouddirectory20170111TypedlinkAttributesGetXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAmazonclouddirectory20170111ObjectAttributesGetXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAmazonclouddirectory20170111ObjectInformationXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAmazonclouddirectory20170111SchemaJsonXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAmazonclouddirectory20170111SchemaJsonXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAmazonclouddirectory20170111TypedlinkFacetGetXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAmazonclouddirectory20170111SchemaAppliedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAmazonclouddirectory20170111ObjectIndicesXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAmazonclouddirectory20170111SchemaDevelopmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAmazonclouddirectory20170111DirectoryListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAmazonclouddirectory20170111FacetAttributesXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAmazonclouddirectory20170111FacetListXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAmazonclouddirectory20170111TypedlinkIncomingXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAmazonclouddirectory20170111IndexTargetsXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAmazonclouddirectory20170111SchemaManagedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAmazonclouddirectory20170111ObjectAttributesXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAmazonclouddirectory20170111ObjectChildrenXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAmazonclouddirectory20170111ObjectParentpathsXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAmazonclouddirectory20170111ObjectParentXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAmazonclouddirectory20170111ObjectPolicyXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAmazonclouddirectory20170111TypedlinkOutgoingXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAmazonclouddirectory20170111PolicyAttachmentXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAmazonclouddirectory20170111SchemaPublishedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAmazonclouddirectory20170111TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAmazonclouddirectory20170111TypedlinkFacetAttributesXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAmazonclouddirectory20170111TypedlinkFacetListXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAmazonclouddirectory20170111PolicyLookupXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAmazonclouddirectory20170111SchemaPublishXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAmazonclouddirectory20170111ObjectFacetsDeleteXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAmazonclouddirectory20170111TagsAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAmazonclouddirectory20170111TagsRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAmazonclouddirectory20170111TypedlinkAttributesUpdateXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAmazonclouddirectory20170111ObjectUpdateXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAmazonclouddirectory20170111SchemaUpdateXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAmazonclouddirectory20170111TypedlinkFacetXAmzDataPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAmazonclouddirectory20170111SchemaUpgradeappliedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAmazonclouddirectory20170111SchemaUpgradepublishedRoute, (c) => {
    throw new Error('Not implemented')
  })
