import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAwsShineFrontendService20170701CreateParallelDataHandler,
  xAmzTargetAwsShineFrontendService20170701DeleteParallelDataHandler,
  xAmzTargetAwsShineFrontendService20170701DeleteTerminologyHandler,
  xAmzTargetAwsShineFrontendService20170701DescribeTextTranslationJobHandler,
  xAmzTargetAwsShineFrontendService20170701GetParallelDataHandler,
  xAmzTargetAwsShineFrontendService20170701GetTerminologyHandler,
  xAmzTargetAwsShineFrontendService20170701ImportTerminologyHandler,
  xAmzTargetAwsShineFrontendService20170701ListLanguagesHandler,
  xAmzTargetAwsShineFrontendService20170701ListParallelDataHandler,
  xAmzTargetAwsShineFrontendService20170701ListTagsForResourceHandler,
  xAmzTargetAwsShineFrontendService20170701ListTerminologiesHandler,
  xAmzTargetAwsShineFrontendService20170701ListTextTranslationJobsHandler,
  xAmzTargetAwsShineFrontendService20170701StartTextTranslationJobHandler,
  xAmzTargetAwsShineFrontendService20170701StopTextTranslationJobHandler,
  xAmzTargetAwsShineFrontendService20170701TagResourceHandler,
  xAmzTargetAwsShineFrontendService20170701TranslateDocumentHandler,
  xAmzTargetAwsShineFrontendService20170701TranslateTextHandler,
  xAmzTargetAwsShineFrontendService20170701UntagResourceHandler,
  xAmzTargetAwsShineFrontendService20170701UpdateParallelDataHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAwsShineFrontendService20170701CreateParallelDataHandler)
  .route('/', xAmzTargetAwsShineFrontendService20170701DeleteParallelDataHandler)
  .route('/', xAmzTargetAwsShineFrontendService20170701DeleteTerminologyHandler)
  .route('/', xAmzTargetAwsShineFrontendService20170701DescribeTextTranslationJobHandler)
  .route('/', xAmzTargetAwsShineFrontendService20170701GetParallelDataHandler)
  .route('/', xAmzTargetAwsShineFrontendService20170701GetTerminologyHandler)
  .route('/', xAmzTargetAwsShineFrontendService20170701ImportTerminologyHandler)
  .route('/', xAmzTargetAwsShineFrontendService20170701ListLanguagesHandler)
  .route('/', xAmzTargetAwsShineFrontendService20170701ListParallelDataHandler)
  .route('/', xAmzTargetAwsShineFrontendService20170701ListTagsForResourceHandler)
  .route('/', xAmzTargetAwsShineFrontendService20170701ListTerminologiesHandler)
  .route('/', xAmzTargetAwsShineFrontendService20170701ListTextTranslationJobsHandler)
  .route('/', xAmzTargetAwsShineFrontendService20170701StartTextTranslationJobHandler)
  .route('/', xAmzTargetAwsShineFrontendService20170701StopTextTranslationJobHandler)
  .route('/', xAmzTargetAwsShineFrontendService20170701TagResourceHandler)
  .route('/', xAmzTargetAwsShineFrontendService20170701TranslateDocumentHandler)
  .route('/', xAmzTargetAwsShineFrontendService20170701TranslateTextHandler)
  .route('/', xAmzTargetAwsShineFrontendService20170701UntagResourceHandler)
  .route('/', xAmzTargetAwsShineFrontendService20170701UpdateParallelDataHandler)

export default app
