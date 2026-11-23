import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetTextractAnalyzeDocument(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Textract.AnalyzeDocument']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=Textract.AnalyzeDocument'].$post(args, options))
}

export async function postXAmzTargetTextractAnalyzeExpense(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Textract.AnalyzeExpense']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=Textract.AnalyzeExpense'].$post(args, options))
}

export async function postXAmzTargetTextractAnalyzeID(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Textract.AnalyzeID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=Textract.AnalyzeID'].$post(args, options))
}

export async function postXAmzTargetTextractDetectDocumentText(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Textract.DetectDocumentText']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Textract.DetectDocumentText'].$post(args, options),
  )
}

export async function postXAmzTargetTextractGetDocumentAnalysis(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Textract.GetDocumentAnalysis']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Textract.GetDocumentAnalysis'].$post(args, options),
  )
}

export async function postXAmzTargetTextractGetDocumentTextDetection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Textract.GetDocumentTextDetection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Textract.GetDocumentTextDetection'].$post(args, options),
  )
}

export async function postXAmzTargetTextractGetExpenseAnalysis(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Textract.GetExpenseAnalysis']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Textract.GetExpenseAnalysis'].$post(args, options),
  )
}

export async function postXAmzTargetTextractGetLendingAnalysis(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Textract.GetLendingAnalysis']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Textract.GetLendingAnalysis'].$post(args, options),
  )
}

export async function postXAmzTargetTextractGetLendingAnalysisSummary(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Textract.GetLendingAnalysisSummary']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Textract.GetLendingAnalysisSummary'].$post(args, options),
  )
}

export async function postXAmzTargetTextractStartDocumentAnalysis(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Textract.StartDocumentAnalysis']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Textract.StartDocumentAnalysis'].$post(args, options),
  )
}

export async function postXAmzTargetTextractStartDocumentTextDetection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Textract.StartDocumentTextDetection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Textract.StartDocumentTextDetection'].$post(args, options),
  )
}

export async function postXAmzTargetTextractStartExpenseAnalysis(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Textract.StartExpenseAnalysis']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Textract.StartExpenseAnalysis'].$post(args, options),
  )
}

export async function postXAmzTargetTextractStartLendingAnalysis(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Textract.StartLendingAnalysis']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Textract.StartLendingAnalysis'].$post(args, options),
  )
}
