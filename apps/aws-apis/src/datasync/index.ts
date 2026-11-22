import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetFmrsServiceCancelTaskExecutionHandler,
  XAmzTargetFmrsServiceCreateAgentHandler,
  XAmzTargetFmrsServiceCreateLocationEfsHandler,
  XAmzTargetFmrsServiceCreateLocationFsxLustreHandler,
  XAmzTargetFmrsServiceCreateLocationFsxOntapHandler,
  XAmzTargetFmrsServiceCreateLocationFsxOpenZfsHandler,
  XAmzTargetFmrsServiceCreateLocationFsxWindowsHandler,
  XAmzTargetFmrsServiceCreateLocationHdfsHandler,
  XAmzTargetFmrsServiceCreateLocationNfsHandler,
  XAmzTargetFmrsServiceCreateLocationObjectStorageHandler,
  XAmzTargetFmrsServiceCreateLocationS3Handler,
  XAmzTargetFmrsServiceCreateLocationSmbHandler,
  XAmzTargetFmrsServiceCreateTaskHandler,
  XAmzTargetFmrsServiceDeleteAgentHandler,
  XAmzTargetFmrsServiceDeleteLocationHandler,
  XAmzTargetFmrsServiceDeleteTaskHandler,
  XAmzTargetFmrsServiceDescribeAgentHandler,
  XAmzTargetFmrsServiceDescribeLocationEfsHandler,
  XAmzTargetFmrsServiceDescribeLocationFsxLustreHandler,
  XAmzTargetFmrsServiceDescribeLocationFsxOntapHandler,
  XAmzTargetFmrsServiceDescribeLocationFsxOpenZfsHandler,
  XAmzTargetFmrsServiceDescribeLocationFsxWindowsHandler,
  XAmzTargetFmrsServiceDescribeLocationHdfsHandler,
  XAmzTargetFmrsServiceDescribeLocationNfsHandler,
  XAmzTargetFmrsServiceDescribeLocationObjectStorageHandler,
  XAmzTargetFmrsServiceDescribeLocationS3Handler,
  XAmzTargetFmrsServiceDescribeLocationSmbHandler,
  XAmzTargetFmrsServiceDescribeTaskExecutionHandler,
  XAmzTargetFmrsServiceDescribeTaskHandler,
  XAmzTargetFmrsServiceListAgentsHandler,
  XAmzTargetFmrsServiceListLocationsHandler,
  XAmzTargetFmrsServiceListTagsForResourceHandler,
  XAmzTargetFmrsServiceListTaskExecutionsHandler,
  XAmzTargetFmrsServiceListTasksHandler,
  XAmzTargetFmrsServiceStartTaskExecutionHandler,
  XAmzTargetFmrsServiceTagResourceHandler,
  XAmzTargetFmrsServiceUntagResourceHandler,
  XAmzTargetFmrsServiceUpdateAgentHandler,
  XAmzTargetFmrsServiceUpdateLocationHdfsHandler,
  XAmzTargetFmrsServiceUpdateLocationNfsHandler,
  XAmzTargetFmrsServiceUpdateLocationObjectStorageHandler,
  XAmzTargetFmrsServiceUpdateLocationSmbHandler,
  XAmzTargetFmrsServiceUpdateTaskExecutionHandler,
  XAmzTargetFmrsServiceUpdateTaskHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetFmrsServiceCancelTaskExecutionHandler)
  .route('/', XAmzTargetFmrsServiceCreateAgentHandler)
  .route('/', XAmzTargetFmrsServiceCreateLocationEfsHandler)
  .route('/', XAmzTargetFmrsServiceCreateLocationFsxLustreHandler)
  .route('/', XAmzTargetFmrsServiceCreateLocationFsxOntapHandler)
  .route('/', XAmzTargetFmrsServiceCreateLocationFsxOpenZfsHandler)
  .route('/', XAmzTargetFmrsServiceCreateLocationFsxWindowsHandler)
  .route('/', XAmzTargetFmrsServiceCreateLocationHdfsHandler)
  .route('/', XAmzTargetFmrsServiceCreateLocationNfsHandler)
  .route('/', XAmzTargetFmrsServiceCreateLocationObjectStorageHandler)
  .route('/', XAmzTargetFmrsServiceCreateLocationS3Handler)
  .route('/', XAmzTargetFmrsServiceCreateLocationSmbHandler)
  .route('/', XAmzTargetFmrsServiceCreateTaskHandler)
  .route('/', XAmzTargetFmrsServiceDeleteAgentHandler)
  .route('/', XAmzTargetFmrsServiceDeleteLocationHandler)
  .route('/', XAmzTargetFmrsServiceDeleteTaskHandler)
  .route('/', XAmzTargetFmrsServiceDescribeAgentHandler)
  .route('/', XAmzTargetFmrsServiceDescribeLocationEfsHandler)
  .route('/', XAmzTargetFmrsServiceDescribeLocationFsxLustreHandler)
  .route('/', XAmzTargetFmrsServiceDescribeLocationFsxOntapHandler)
  .route('/', XAmzTargetFmrsServiceDescribeLocationFsxOpenZfsHandler)
  .route('/', XAmzTargetFmrsServiceDescribeLocationFsxWindowsHandler)
  .route('/', XAmzTargetFmrsServiceDescribeLocationHdfsHandler)
  .route('/', XAmzTargetFmrsServiceDescribeLocationNfsHandler)
  .route('/', XAmzTargetFmrsServiceDescribeLocationObjectStorageHandler)
  .route('/', XAmzTargetFmrsServiceDescribeLocationS3Handler)
  .route('/', XAmzTargetFmrsServiceDescribeLocationSmbHandler)
  .route('/', XAmzTargetFmrsServiceDescribeTaskHandler)
  .route('/', XAmzTargetFmrsServiceDescribeTaskExecutionHandler)
  .route('/', XAmzTargetFmrsServiceListAgentsHandler)
  .route('/', XAmzTargetFmrsServiceListLocationsHandler)
  .route('/', XAmzTargetFmrsServiceListTagsForResourceHandler)
  .route('/', XAmzTargetFmrsServiceListTaskExecutionsHandler)
  .route('/', XAmzTargetFmrsServiceListTasksHandler)
  .route('/', XAmzTargetFmrsServiceStartTaskExecutionHandler)
  .route('/', XAmzTargetFmrsServiceTagResourceHandler)
  .route('/', XAmzTargetFmrsServiceUntagResourceHandler)
  .route('/', XAmzTargetFmrsServiceUpdateAgentHandler)
  .route('/', XAmzTargetFmrsServiceUpdateLocationHdfsHandler)
  .route('/', XAmzTargetFmrsServiceUpdateLocationNfsHandler)
  .route('/', XAmzTargetFmrsServiceUpdateLocationObjectStorageHandler)
  .route('/', XAmzTargetFmrsServiceUpdateLocationSmbHandler)
  .route('/', XAmzTargetFmrsServiceUpdateTaskHandler)
  .route('/', XAmzTargetFmrsServiceUpdateTaskExecutionHandler)

export default app
