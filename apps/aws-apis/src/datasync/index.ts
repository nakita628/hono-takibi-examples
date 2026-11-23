import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetFmrsServiceCancelTaskExecutionHandler,
  xAmzTargetFmrsServiceCreateAgentHandler,
  xAmzTargetFmrsServiceCreateLocationEfsHandler,
  xAmzTargetFmrsServiceCreateLocationFsxLustreHandler,
  xAmzTargetFmrsServiceCreateLocationFsxOntapHandler,
  xAmzTargetFmrsServiceCreateLocationFsxOpenZfsHandler,
  xAmzTargetFmrsServiceCreateLocationFsxWindowsHandler,
  xAmzTargetFmrsServiceCreateLocationHdfsHandler,
  xAmzTargetFmrsServiceCreateLocationNfsHandler,
  xAmzTargetFmrsServiceCreateLocationObjectStorageHandler,
  xAmzTargetFmrsServiceCreateLocationS3Handler,
  xAmzTargetFmrsServiceCreateLocationSmbHandler,
  xAmzTargetFmrsServiceCreateTaskHandler,
  xAmzTargetFmrsServiceDeleteAgentHandler,
  xAmzTargetFmrsServiceDeleteLocationHandler,
  xAmzTargetFmrsServiceDeleteTaskHandler,
  xAmzTargetFmrsServiceDescribeAgentHandler,
  xAmzTargetFmrsServiceDescribeLocationEfsHandler,
  xAmzTargetFmrsServiceDescribeLocationFsxLustreHandler,
  xAmzTargetFmrsServiceDescribeLocationFsxOntapHandler,
  xAmzTargetFmrsServiceDescribeLocationFsxOpenZfsHandler,
  xAmzTargetFmrsServiceDescribeLocationFsxWindowsHandler,
  xAmzTargetFmrsServiceDescribeLocationHdfsHandler,
  xAmzTargetFmrsServiceDescribeLocationNfsHandler,
  xAmzTargetFmrsServiceDescribeLocationObjectStorageHandler,
  xAmzTargetFmrsServiceDescribeLocationS3Handler,
  xAmzTargetFmrsServiceDescribeLocationSmbHandler,
  xAmzTargetFmrsServiceDescribeTaskExecutionHandler,
  xAmzTargetFmrsServiceDescribeTaskHandler,
  xAmzTargetFmrsServiceListAgentsHandler,
  xAmzTargetFmrsServiceListLocationsHandler,
  xAmzTargetFmrsServiceListTagsForResourceHandler,
  xAmzTargetFmrsServiceListTaskExecutionsHandler,
  xAmzTargetFmrsServiceListTasksHandler,
  xAmzTargetFmrsServiceStartTaskExecutionHandler,
  xAmzTargetFmrsServiceTagResourceHandler,
  xAmzTargetFmrsServiceUntagResourceHandler,
  xAmzTargetFmrsServiceUpdateAgentHandler,
  xAmzTargetFmrsServiceUpdateLocationHdfsHandler,
  xAmzTargetFmrsServiceUpdateLocationNfsHandler,
  xAmzTargetFmrsServiceUpdateLocationObjectStorageHandler,
  xAmzTargetFmrsServiceUpdateLocationSmbHandler,
  xAmzTargetFmrsServiceUpdateTaskExecutionHandler,
  xAmzTargetFmrsServiceUpdateTaskHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetFmrsServiceCancelTaskExecutionHandler)
  .route('/', xAmzTargetFmrsServiceCreateAgentHandler)
  .route('/', xAmzTargetFmrsServiceCreateLocationEfsHandler)
  .route('/', xAmzTargetFmrsServiceCreateLocationFsxLustreHandler)
  .route('/', xAmzTargetFmrsServiceCreateLocationFsxOntapHandler)
  .route('/', xAmzTargetFmrsServiceCreateLocationFsxOpenZfsHandler)
  .route('/', xAmzTargetFmrsServiceCreateLocationFsxWindowsHandler)
  .route('/', xAmzTargetFmrsServiceCreateLocationHdfsHandler)
  .route('/', xAmzTargetFmrsServiceCreateLocationNfsHandler)
  .route('/', xAmzTargetFmrsServiceCreateLocationObjectStorageHandler)
  .route('/', xAmzTargetFmrsServiceCreateLocationS3Handler)
  .route('/', xAmzTargetFmrsServiceCreateLocationSmbHandler)
  .route('/', xAmzTargetFmrsServiceCreateTaskHandler)
  .route('/', xAmzTargetFmrsServiceDeleteAgentHandler)
  .route('/', xAmzTargetFmrsServiceDeleteLocationHandler)
  .route('/', xAmzTargetFmrsServiceDeleteTaskHandler)
  .route('/', xAmzTargetFmrsServiceDescribeAgentHandler)
  .route('/', xAmzTargetFmrsServiceDescribeLocationEfsHandler)
  .route('/', xAmzTargetFmrsServiceDescribeLocationFsxLustreHandler)
  .route('/', xAmzTargetFmrsServiceDescribeLocationFsxOntapHandler)
  .route('/', xAmzTargetFmrsServiceDescribeLocationFsxOpenZfsHandler)
  .route('/', xAmzTargetFmrsServiceDescribeLocationFsxWindowsHandler)
  .route('/', xAmzTargetFmrsServiceDescribeLocationHdfsHandler)
  .route('/', xAmzTargetFmrsServiceDescribeLocationNfsHandler)
  .route('/', xAmzTargetFmrsServiceDescribeLocationObjectStorageHandler)
  .route('/', xAmzTargetFmrsServiceDescribeLocationS3Handler)
  .route('/', xAmzTargetFmrsServiceDescribeLocationSmbHandler)
  .route('/', xAmzTargetFmrsServiceDescribeTaskHandler)
  .route('/', xAmzTargetFmrsServiceDescribeTaskExecutionHandler)
  .route('/', xAmzTargetFmrsServiceListAgentsHandler)
  .route('/', xAmzTargetFmrsServiceListLocationsHandler)
  .route('/', xAmzTargetFmrsServiceListTagsForResourceHandler)
  .route('/', xAmzTargetFmrsServiceListTaskExecutionsHandler)
  .route('/', xAmzTargetFmrsServiceListTasksHandler)
  .route('/', xAmzTargetFmrsServiceStartTaskExecutionHandler)
  .route('/', xAmzTargetFmrsServiceTagResourceHandler)
  .route('/', xAmzTargetFmrsServiceUntagResourceHandler)
  .route('/', xAmzTargetFmrsServiceUpdateAgentHandler)
  .route('/', xAmzTargetFmrsServiceUpdateLocationHdfsHandler)
  .route('/', xAmzTargetFmrsServiceUpdateLocationNfsHandler)
  .route('/', xAmzTargetFmrsServiceUpdateLocationObjectStorageHandler)
  .route('/', xAmzTargetFmrsServiceUpdateLocationSmbHandler)
  .route('/', xAmzTargetFmrsServiceUpdateTaskHandler)
  .route('/', xAmzTargetFmrsServiceUpdateTaskExecutionHandler)

export default app
