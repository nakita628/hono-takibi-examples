import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetEc2WindowsBarleyServiceCreateApplicationHandler,
  xAmzTargetEc2WindowsBarleyServiceCreateComponentHandler,
  xAmzTargetEc2WindowsBarleyServiceCreateLogPatternHandler,
  xAmzTargetEc2WindowsBarleyServiceDeleteApplicationHandler,
  xAmzTargetEc2WindowsBarleyServiceDeleteComponentHandler,
  xAmzTargetEc2WindowsBarleyServiceDeleteLogPatternHandler,
  xAmzTargetEc2WindowsBarleyServiceDescribeApplicationHandler,
  xAmzTargetEc2WindowsBarleyServiceDescribeComponentConfigurationHandler,
  xAmzTargetEc2WindowsBarleyServiceDescribeComponentConfigurationRecommendationHandler,
  xAmzTargetEc2WindowsBarleyServiceDescribeComponentHandler,
  xAmzTargetEc2WindowsBarleyServiceDescribeLogPatternHandler,
  xAmzTargetEc2WindowsBarleyServiceDescribeObservationHandler,
  xAmzTargetEc2WindowsBarleyServiceDescribeProblemHandler,
  xAmzTargetEc2WindowsBarleyServiceDescribeProblemObservationsHandler,
  xAmzTargetEc2WindowsBarleyServiceListApplicationsHandler,
  xAmzTargetEc2WindowsBarleyServiceListComponentsHandler,
  xAmzTargetEc2WindowsBarleyServiceListConfigurationHistoryHandler,
  xAmzTargetEc2WindowsBarleyServiceListLogPatternSetsHandler,
  xAmzTargetEc2WindowsBarleyServiceListLogPatternsHandler,
  xAmzTargetEc2WindowsBarleyServiceListProblemsHandler,
  xAmzTargetEc2WindowsBarleyServiceListTagsForResourceHandler,
  xAmzTargetEc2WindowsBarleyServiceTagResourceHandler,
  xAmzTargetEc2WindowsBarleyServiceUntagResourceHandler,
  xAmzTargetEc2WindowsBarleyServiceUpdateApplicationHandler,
  xAmzTargetEc2WindowsBarleyServiceUpdateComponentConfigurationHandler,
  xAmzTargetEc2WindowsBarleyServiceUpdateComponentHandler,
  xAmzTargetEc2WindowsBarleyServiceUpdateLogPatternHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetEc2WindowsBarleyServiceCreateApplicationHandler)
  .route('/', xAmzTargetEc2WindowsBarleyServiceCreateComponentHandler)
  .route('/', xAmzTargetEc2WindowsBarleyServiceCreateLogPatternHandler)
  .route('/', xAmzTargetEc2WindowsBarleyServiceDeleteApplicationHandler)
  .route('/', xAmzTargetEc2WindowsBarleyServiceDeleteComponentHandler)
  .route('/', xAmzTargetEc2WindowsBarleyServiceDeleteLogPatternHandler)
  .route('/', xAmzTargetEc2WindowsBarleyServiceDescribeApplicationHandler)
  .route('/', xAmzTargetEc2WindowsBarleyServiceDescribeComponentHandler)
  .route('/', xAmzTargetEc2WindowsBarleyServiceDescribeComponentConfigurationHandler)
  .route('/', xAmzTargetEc2WindowsBarleyServiceDescribeComponentConfigurationRecommendationHandler)
  .route('/', xAmzTargetEc2WindowsBarleyServiceDescribeLogPatternHandler)
  .route('/', xAmzTargetEc2WindowsBarleyServiceDescribeObservationHandler)
  .route('/', xAmzTargetEc2WindowsBarleyServiceDescribeProblemHandler)
  .route('/', xAmzTargetEc2WindowsBarleyServiceDescribeProblemObservationsHandler)
  .route('/', xAmzTargetEc2WindowsBarleyServiceListApplicationsHandler)
  .route('/', xAmzTargetEc2WindowsBarleyServiceListComponentsHandler)
  .route('/', xAmzTargetEc2WindowsBarleyServiceListConfigurationHistoryHandler)
  .route('/', xAmzTargetEc2WindowsBarleyServiceListLogPatternSetsHandler)
  .route('/', xAmzTargetEc2WindowsBarleyServiceListLogPatternsHandler)
  .route('/', xAmzTargetEc2WindowsBarleyServiceListProblemsHandler)
  .route('/', xAmzTargetEc2WindowsBarleyServiceListTagsForResourceHandler)
  .route('/', xAmzTargetEc2WindowsBarleyServiceTagResourceHandler)
  .route('/', xAmzTargetEc2WindowsBarleyServiceUntagResourceHandler)
  .route('/', xAmzTargetEc2WindowsBarleyServiceUpdateApplicationHandler)
  .route('/', xAmzTargetEc2WindowsBarleyServiceUpdateComponentHandler)
  .route('/', xAmzTargetEc2WindowsBarleyServiceUpdateComponentConfigurationHandler)
  .route('/', xAmzTargetEc2WindowsBarleyServiceUpdateLogPatternHandler)

export default app
