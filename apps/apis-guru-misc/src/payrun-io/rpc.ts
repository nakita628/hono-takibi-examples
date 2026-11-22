import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getEmployerEmployerId(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].$get(args, options))
}

export async function putEmployerEmployerId(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].$put(args, options))
}

export async function deleteEmployerEmployerId(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].$delete(args, options))
}

export async function patchEmployerEmployerId(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].$patch(args, options))
}

export async function getEmployerEmployerIdCisLineTypeCisLineTypeId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].CisLineType[':CisLineTypeId'].$get(args, options),
  )
}

export async function putEmployerEmployerIdCisLineTypeCisLineTypeId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].CisLineType[':CisLineTypeId'].$put(args, options),
  )
}

export async function deleteEmployerEmployerIdCisLineTypeCisLineTypeId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].CisLineType[':CisLineTypeId'].$delete(args, options),
  )
}

export async function getEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].CisLineType[':CisLineTypeId'].Tag[':TagId'].$get(args, options),
  )
}

export async function putEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tag'][':TagId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].CisLineType[':CisLineTypeId'].Tag[':TagId'].$put(args, options),
  )
}

export async function deleteEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tag'][':TagId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].CisLineType[':CisLineTypeId'].Tag[':TagId'].$delete(
      args,
      options,
    ),
  )
}

export async function getEmployerEmployerIdCisLineTypeCisLineTypeIdTags(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].CisLineType[':CisLineTypeId'].Tags.$get(args, options),
  )
}

export async function getEmployerEmployerIdCisLineTypes(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['CisLineTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].CisLineTypes.$get(args, options))
}

export async function postEmployerEmployerIdCisLineTypes(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['CisLineTypes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].CisLineTypes.$post(args, options))
}

export async function getEmployerEmployerIdCisLineTypesTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['CisLineTypes']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].CisLineTypes.Tag[':TagId'].$get(args, options),
  )
}

export async function getEmployerEmployerIdCisLineTypesTags(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['CisLineTypes']['Tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].CisLineTypes.Tags.$get(args, options))
}

export async function getEmployerEmployerIdCisTransactionCisTransactionId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['CisTransaction'][':CisTransactionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].CisTransaction[':CisTransactionId'].$get(args, options),
  )
}

export async function deleteEmployerEmployerIdCisTransactionCisTransactionId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['CisTransaction'][':CisTransactionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].CisTransaction[':CisTransactionId'].$delete(args, options),
  )
}

export async function getEmployerEmployerIdCisTransactions(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['CisTransactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].CisTransactions.$get(args, options))
}

export async function getEmployerEmployerIdDpsMessageDpsMessageId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['DpsMessage'][':DpsMessageId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].DpsMessage[':DpsMessageId'].$get(args, options),
  )
}

export async function putEmployerEmployerIdDpsMessageDpsMessageId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['DpsMessage'][':DpsMessageId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].DpsMessage[':DpsMessageId'].$put(args, options),
  )
}

export async function deleteEmployerEmployerIdDpsMessageDpsMessageId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['DpsMessage'][':DpsMessageId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].DpsMessage[':DpsMessageId'].$delete(args, options),
  )
}

export async function patchEmployerEmployerIdDpsMessageDpsMessageId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['DpsMessage'][':DpsMessageId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].DpsMessage[':DpsMessageId'].$patch(args, options),
  )
}

export async function getEmployerEmployerIdDpsMessages(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['DpsMessages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].DpsMessages.$get(args, options))
}

export async function postEmployerEmployerIdDpsMessages(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['DpsMessages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].DpsMessages.$post(args, options))
}

export async function getEmployerEmployerIdEmployeeEmployeeId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].$get(args, options),
  )
}

export async function putEmployerEmployerIdEmployeeEmployeeId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].$put(args, options),
  )
}

export async function deleteEmployerEmployerIdEmployeeEmployeeId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].$delete(args, options),
  )
}

export async function patchEmployerEmployerIdEmployeeEmployeeId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].$patch(args, options),
  )
}

export async function getEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessment'][':AEAssessmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].AEAssessment[':AEAssessmentId'].$get(
      args,
      options,
    ),
  )
}

export async function putEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessment'][':AEAssessmentId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].AEAssessment[':AEAssessmentId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessment'][':AEAssessmentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].AEAssessment[':AEAssessmentId'].$delete(
      args,
      options,
    ),
  )
}

export async function getEmployerEmployerIdEmployeeEmployeeIdAEAssessments(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].AEAssessments.$get(args, options),
  )
}

export async function postEmployerEmployerIdEmployeeEmployeeIdAEAssessments(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].AEAssessments.$post(args, options),
  )
}

export async function getEmployerEmployerIdEmployeeEmployeeIdCommentaries(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Commentaries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].Commentaries.$get(args, options),
  )
}

export async function getEmployerEmployerIdEmployeeEmployeeIdCommentaryCommentaryId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Commentary'][':CommentaryId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].Commentary[':CommentaryId'].$get(
      args,
      options,
    ),
  )
}

export async function getEmployerEmployerIdEmployeeEmployeeIdJournalLines(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['JournalLines']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].JournalLines.$get(args, options),
  )
}

export async function getEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].PayInstruction[':PayInstructionId'].$get(
      args,
      options,
    ),
  )
}

export async function putEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].PayInstruction[':PayInstructionId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].PayInstruction[
      ':PayInstructionId'
    ].$delete(args, options),
  )
}

export async function patchEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].PayInstruction[
      ':PayInstructionId'
    ].$patch(args, options),
  )
}

export async function getEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].PayInstruction[':PayInstructionId'].Tag[
      ':TagId'
    ].$get(args, options),
  )
}

export async function putEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tag'][':TagId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].PayInstruction[':PayInstructionId'].Tag[
      ':TagId'
    ].$put(args, options),
  )
}

export async function deleteEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tag'][':TagId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].PayInstruction[':PayInstructionId'].Tag[
      ':TagId'
    ].$delete(args, options),
  )
}

export async function getEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTags(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].PayInstruction[
      ':PayInstructionId'
    ].Tags.$get(args, options),
  )
}

export async function getEmployerEmployerIdEmployeeEmployeeIdPayInstructions(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].PayInstructions.$get(args, options),
  )
}

export async function postEmployerEmployerIdEmployeeEmployeeIdPayInstructions(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].PayInstructions.$post(args, options),
  )
}

export async function getEmployerEmployerIdEmployeeEmployeeIdPayInstructionsTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].PayInstructions.Tag[':TagId'].$get(
      args,
      options,
    ),
  )
}

export async function getEmployerEmployerIdEmployeeEmployeeIdPayInstructionsTags(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['Tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].PayInstructions.Tags.$get(args, options),
  )
}

export async function getEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].PayLine[':PayLineId'].$get(
      args,
      options,
    ),
  )
}

export async function getEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].PayLine[':PayLineId'].Tag[':TagId'].$get(
      args,
      options,
    ),
  )
}

export async function putEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tag'][':TagId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].PayLine[':PayLineId'].Tag[':TagId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tag'][':TagId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].PayLine[':PayLineId'].Tag[
      ':TagId'
    ].$delete(args, options),
  )
}

export async function getEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTags(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].PayLine[':PayLineId'].Tags.$get(
      args,
      options,
    ),
  )
}

export async function getEmployerEmployerIdEmployeeEmployeeIdPayLines(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].PayLines.$get(args, options),
  )
}

export async function getEmployerEmployerIdEmployeeEmployeeIdPayLinesTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].PayLines.Tag[':TagId'].$get(
      args,
      options,
    ),
  )
}

export async function getEmployerEmployerIdEmployeeEmployeeIdPayLinesTags(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['Tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].PayLines.Tags.$get(args, options),
  )
}

export async function getEmployerEmployerIdEmployeeEmployeeIdPayRuns(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayRuns']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].PayRuns.$get(args, options),
  )
}

export async function getEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumber(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revision'][':RevisionNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].Revision[':RevisionNumber'].$get(
      args,
      options,
    ),
  )
}

export async function deleteEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumber(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revision'][':RevisionNumber']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].Revision[':RevisionNumber'].$delete(
      args,
      options,
    ),
  )
}

export async function getEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumberSummary(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revision'][':RevisionNumber']['Summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].Revision[':RevisionNumber'].Summary.$get(
      args,
      options,
    ),
  )
}

export async function getEmployerEmployerIdEmployeeEmployeeIdRevisions(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revisions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].Revisions.$get(args, options),
  )
}

export async function getEmployerEmployerIdEmployeeEmployeeIdRevisionsSummary(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revisions']['Summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].Revisions.Summary.$get(args, options),
  )
}

export async function getEmployerEmployerIdEmployeeEmployeeIdSecretSecretId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secret'][':SecretId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].Secret[':SecretId'].$get(args, options),
  )
}

export async function putEmployerEmployerIdEmployeeEmployeeIdSecretSecretId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secret'][':SecretId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].Secret[':SecretId'].$put(args, options),
  )
}

export async function deleteEmployerEmployerIdEmployeeEmployeeIdSecretSecretId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secret'][':SecretId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].Secret[':SecretId'].$delete(
      args,
      options,
    ),
  )
}

export async function getEmployerEmployerIdEmployeeEmployeeIdSecrets(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secrets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].Secrets.$get(args, options),
  )
}

export async function postEmployerEmployerIdEmployeeEmployeeIdSecrets(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secrets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].Secrets.$post(args, options),
  )
}

export async function getEmployerEmployerIdEmployeeEmployeeIdSummary(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].Summary.$get(args, options),
  )
}

export async function getEmployerEmployerIdEmployeeEmployeeIdTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].Tag[':TagId'].$get(args, options),
  )
}

export async function putEmployerEmployerIdEmployeeEmployeeIdTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].Tag[':TagId'].$put(args, options),
  )
}

export async function deleteEmployerEmployerIdEmployeeEmployeeIdTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].Tag[':TagId'].$delete(args, options),
  )
}

export async function getEmployerEmployerIdEmployeeEmployeeIdTagTagIdEffectiveDate(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId'][':EffectiveDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].Tag[':TagId'][':EffectiveDate'].$get(
      args,
      options,
    ),
  )
}

export async function getEmployerEmployerIdEmployeeEmployeeIdTags(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].Tags.$get(args, options),
  )
}

export async function getEmployerEmployerIdEmployeeEmployeeIdTagsEffectiveDate(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tags'][':EffectiveDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'].Tags[':EffectiveDate'].$get(
      args,
      options,
    ),
  )
}

export async function getEmployerEmployerIdEmployeeEmployeeIdEffectiveDate(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId'][':EffectiveDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'][':EffectiveDate'].$get(args, options),
  )
}

export async function deleteEmployerEmployerIdEmployeeEmployeeIdEffectiveDate(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId'][':EffectiveDate']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'][':EffectiveDate'].$delete(args, options),
  )
}

export async function getEmployerEmployerIdEmployeeEmployeeIdEffectiveDateSummary(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId'][':EffectiveDate']['Summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employee[':EmployeeId'][':EffectiveDate'].Summary.$get(
      args,
      options,
    ),
  )
}

export async function getEmployerEmployerIdEmployees(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Employees']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].Employees.$get(args, options))
}

export async function postEmployerEmployerIdEmployees(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Employees']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].Employees.$post(args, options))
}

export async function getEmployerEmployerIdEmployeesSummary(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Employees']['Summary']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].Employees.Summary.$get(args, options))
}

export async function getEmployerEmployerIdEmployeesTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employees']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employees.Tag[':TagId'].$get(args, options),
  )
}

export async function getEmployerEmployerIdEmployeesTags(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Employees']['Tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].Employees.Tags.$get(args, options))
}

export async function getEmployerEmployerIdEmployeesEffectiveDate(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employees'][':EffectiveDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employees[':EffectiveDate'].$get(args, options),
  )
}

export async function getEmployerEmployerIdEmployeesEffectiveDateSummary(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employees'][':EffectiveDate']['Summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Employees[':EffectiveDate'].Summary.$get(args, options),
  )
}

export async function getEmployerEmployerIdHolidaySchemeHolidaySchemeId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].$get(args, options),
  )
}

export async function putEmployerEmployerIdHolidaySchemeHolidaySchemeId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].$put(args, options),
  )
}

export async function deleteEmployerEmployerIdHolidaySchemeHolidaySchemeId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].$delete(args, options),
  )
}

export async function patchEmployerEmployerIdHolidaySchemeHolidaySchemeId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].$patch(args, options),
  )
}

export async function getEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionRevisionNumber(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Revision'][':RevisionNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].Revision[
      ':RevisionNumber'
    ].$get(args, options),
  )
}

export async function deleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionRevisionNumber(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Revision'][':RevisionNumber']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].Revision[
      ':RevisionNumber'
    ].$delete(args, options),
  )
}

export async function getEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisions(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Revisions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].Revisions.$get(args, options),
  )
}

export async function getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].Tag[':TagId'].$get(
      args,
      options,
    ),
  )
}

export async function putEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].Tag[':TagId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].Tag[':TagId'].$delete(
      args,
      options,
    ),
  )
}

export async function getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdEffectiveDate(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId'][':EffectiveDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].Tag[':TagId'][
      ':EffectiveDate'
    ].$get(args, options),
  )
}

export async function getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTags(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].Tags.$get(args, options),
  )
}

export async function getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagsEffectiveDate(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tags'][':EffectiveDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].Tags[':EffectiveDate'].$get(
      args,
      options,
    ),
  )
}

export async function getEmployerEmployerIdHolidaySchemeHolidaySchemeIdEffectiveDate(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId'][':EffectiveDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'][':EffectiveDate'].$get(
      args,
      options,
    ),
  )
}

export async function deleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdEffectiveDate(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId'][':EffectiveDate']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'][':EffectiveDate'].$delete(
      args,
      options,
    ),
  )
}

export async function getEmployerEmployerIdHolidaySchemes(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['HolidaySchemes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].HolidaySchemes.$get(args, options))
}

export async function postEmployerEmployerIdHolidaySchemes(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['HolidaySchemes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].HolidaySchemes.$post(args, options))
}

export async function getEmployerEmployerIdHolidaySchemesTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidaySchemes']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].HolidaySchemes.Tag[':TagId'].$get(args, options),
  )
}

export async function getEmployerEmployerIdHolidaySchemesTags(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['HolidaySchemes']['Tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].HolidaySchemes.Tags.$get(args, options))
}

export async function getEmployerEmployerIdHolidaySchemesEffectiveDate(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidaySchemes'][':EffectiveDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].HolidaySchemes[':EffectiveDate'].$get(args, options),
  )
}

export async function getEmployerEmployerIdJournalInstructionJournalInstructionId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['JournalInstruction'][':JournalInstructionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].JournalInstruction[':JournalInstructionId'].$get(args, options),
  )
}

export async function putEmployerEmployerIdJournalInstructionJournalInstructionId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['JournalInstruction'][':JournalInstructionId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].JournalInstruction[':JournalInstructionId'].$put(args, options),
  )
}

export async function deleteEmployerEmployerIdJournalInstructionJournalInstructionId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['JournalInstruction'][':JournalInstructionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].JournalInstruction[':JournalInstructionId'].$delete(
      args,
      options,
    ),
  )
}

export async function getEmployerEmployerIdJournalInstructions(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['JournalInstructions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].JournalInstructions.$get(args, options))
}

export async function postEmployerEmployerIdJournalInstructions(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['JournalInstructions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].JournalInstructions.$post(args, options),
  )
}

export async function getEmployerEmployerIdJournalLineJournalLineId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].JournalLine[':JournalLineId'].$get(args, options),
  )
}

export async function getEmployerEmployerIdJournalLineJournalLineIdTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].JournalLine[':JournalLineId'].Tag[':TagId'].$get(args, options),
  )
}

export async function putEmployerEmployerIdJournalLineJournalLineIdTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tag'][':TagId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].JournalLine[':JournalLineId'].Tag[':TagId'].$put(args, options),
  )
}

export async function deleteEmployerEmployerIdJournalLineJournalLineIdTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tag'][':TagId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].JournalLine[':JournalLineId'].Tag[':TagId'].$delete(
      args,
      options,
    ),
  )
}

export async function getEmployerEmployerIdJournalLineJournalLineIdTags(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].JournalLine[':JournalLineId'].Tags.$get(args, options),
  )
}

export async function getEmployerEmployerIdJournalLines(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['JournalLines']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].JournalLines.$get(args, options))
}

export async function getEmployerEmployerIdJournalLinesTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['JournalLines']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].JournalLines.Tag[':TagId'].$get(args, options),
  )
}

export async function getEmployerEmployerIdJournalLinesTags(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['JournalLines']['Tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].JournalLines.Tags.$get(args, options))
}

export async function getEmployerEmployerIdNominalCodeNominalCodeId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].NominalCode[':NominalCodeId'].$get(args, options),
  )
}

export async function putEmployerEmployerIdNominalCodeNominalCodeId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].NominalCode[':NominalCodeId'].$put(args, options),
  )
}

export async function deleteEmployerEmployerIdNominalCodeNominalCodeId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].NominalCode[':NominalCodeId'].$delete(args, options),
  )
}

export async function getEmployerEmployerIdNominalCodeNominalCodeIdPayCodes(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['PayCodes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].NominalCode[':NominalCodeId'].PayCodes.$get(args, options),
  )
}

export async function getEmployerEmployerIdNominalCodes(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['NominalCodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].NominalCodes.$get(args, options))
}

export async function postEmployerEmployerIdNominalCodes(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['NominalCodes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].NominalCodes.$post(args, options))
}

export async function getEmployerEmployerIdPayCodePayCodeId(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].PayCode[':PayCodeId'].$get(args, options),
  )
}

export async function putEmployerEmployerIdPayCodePayCodeId(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].PayCode[':PayCodeId'].$put(args, options),
  )
}

export async function deleteEmployerEmployerIdPayCodePayCodeId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].PayCode[':PayCodeId'].$delete(args, options),
  )
}

export async function patchEmployerEmployerIdPayCodePayCodeId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].PayCode[':PayCodeId'].$patch(args, options),
  )
}

export async function getEmployerEmployerIdPayCodePayCodeIdRevisionRevisionNumber(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Revision'][':RevisionNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].PayCode[':PayCodeId'].Revision[':RevisionNumber'].$get(
      args,
      options,
    ),
  )
}

export async function deleteEmployerEmployerIdPayCodePayCodeIdRevisionRevisionNumber(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Revision'][':RevisionNumber']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].PayCode[':PayCodeId'].Revision[':RevisionNumber'].$delete(
      args,
      options,
    ),
  )
}

export async function getEmployerEmployerIdPayCodePayCodeIdRevisions(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Revisions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].PayCode[':PayCodeId'].Revisions.$get(args, options),
  )
}

export async function getEmployerEmployerIdPayCodePayCodeIdTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].PayCode[':PayCodeId'].Tag[':TagId'].$get(args, options),
  )
}

export async function putEmployerEmployerIdPayCodePayCodeIdTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tag'][':TagId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].PayCode[':PayCodeId'].Tag[':TagId'].$put(args, options),
  )
}

export async function deleteEmployerEmployerIdPayCodePayCodeIdTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tag'][':TagId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].PayCode[':PayCodeId'].Tag[':TagId'].$delete(args, options),
  )
}

export async function getEmployerEmployerIdPayCodePayCodeIdTags(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].PayCode[':PayCodeId'].Tags.$get(args, options),
  )
}

export async function getEmployerEmployerIdPayCodePayCodeIdEffectiveDate(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId'][':EffectiveDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].PayCode[':PayCodeId'][':EffectiveDate'].$get(args, options),
  )
}

export async function deleteEmployerEmployerIdPayCodePayCodeIdEffectiveDate(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId'][':EffectiveDate']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].PayCode[':PayCodeId'][':EffectiveDate'].$delete(args, options),
  )
}

export async function getEmployerEmployerIdPayCodes(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['PayCodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].PayCodes.$get(args, options))
}

export async function postEmployerEmployerIdPayCodes(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['PayCodes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].PayCodes.$post(args, options))
}

export async function getEmployerEmployerIdPayCodesTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCodes']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].PayCodes.Tag[':TagId'].$get(args, options),
  )
}

export async function getEmployerEmployerIdPayCodesTags(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['PayCodes']['Tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].PayCodes.Tags.$get(args, options))
}

export async function getEmployerEmployerIdPayCodesEffectiveDate(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCodes'][':EffectiveDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].PayCodes[':EffectiveDate'].$get(args, options),
  )
}

export async function getEmployerEmployerIdPaySchedulePayScheduleId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].$get(args, options),
  )
}

export async function putEmployerEmployerIdPaySchedulePayScheduleId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].$put(args, options),
  )
}

export async function deleteEmployerEmployerIdPaySchedulePayScheduleId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].$delete(args, options),
  )
}

export async function getEmployerEmployerIdPaySchedulePayScheduleIdEmployees(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Employees']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].Employees.$get(args, options),
  )
}

export async function getEmployerEmployerIdPaySchedulePayScheduleIdEmployeesEffectiveDate(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Employees'][':EffectiveDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].Employees[':EffectiveDate'].$get(
      args,
      options,
    ),
  )
}

export async function getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[':PayRunId'].$get(
      args,
      options,
    ),
  )
}

export async function deleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[':PayRunId'].$delete(
      args,
      options,
    ),
  )
}

export async function getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdAEAssessments(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['AEAssessments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[
      ':PayRunId'
    ].AEAssessments.$get(args, options),
  )
}

export async function getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdCommentaries(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Commentaries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[
      ':PayRunId'
    ].Commentaries.$get(args, options),
  )
}

export async function deleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeeEmployeeId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Employee'][':EmployeeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[':PayRunId'].Employee[
      ':EmployeeId'
    ].$delete(args, options),
  )
}

export async function getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeeEmployeeIdCommentary(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Employee'][':EmployeeId']['Commentary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[':PayRunId'].Employee[
      ':EmployeeId'
    ].Commentary.$get(args, options),
  )
}

export async function getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployees(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Employees']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[':PayRunId'].Employees.$get(
      args,
      options,
    ),
  )
}

export async function getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdJournalLines(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['JournalLines']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[
      ':PayRunId'
    ].JournalLines.$get(args, options),
  )
}

export async function getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdPayLines(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['PayLines']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[':PayRunId'].PayLines.$get(
      args,
      options,
    ),
  )
}

export async function getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdReportLines(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['ReportLines']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[
      ':PayRunId'
    ].ReportLines.$get(args, options),
  )
}

export async function getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[':PayRunId'].Tag[
      ':TagId'
    ].$get(args, options),
  )
}

export async function putEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tag'][':TagId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[':PayRunId'].Tag[
      ':TagId'
    ].$put(args, options),
  )
}

export async function deleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tag'][':TagId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[':PayRunId'].Tag[
      ':TagId'
    ].$delete(args, options),
  )
}

export async function getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTags(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[':PayRunId'].Tags.$get(
      args,
      options,
    ),
  )
}

export async function getEmployerEmployerIdPaySchedulePayScheduleIdPayRuns(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRuns.$get(args, options),
  )
}

export async function getEmployerEmployerIdPaySchedulePayScheduleIdPayRunsTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRuns.Tag[':TagId'].$get(
      args,
      options,
    ),
  )
}

export async function getEmployerEmployerIdPaySchedulePayScheduleIdPayRunsTags(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['Tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRuns.Tags.$get(args, options),
  )
}

export async function getEmployerEmployerIdPaySchedulePayScheduleIdTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].Tag[':TagId'].$get(args, options),
  )
}

export async function putEmployerEmployerIdPaySchedulePayScheduleIdTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tag'][':TagId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].Tag[':TagId'].$put(args, options),
  )
}

export async function deleteEmployerEmployerIdPaySchedulePayScheduleIdTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tag'][':TagId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].Tag[':TagId'].$delete(
      args,
      options,
    ),
  )
}

export async function getEmployerEmployerIdPaySchedulePayScheduleIdTags(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].Tags.$get(args, options),
  )
}

export async function getEmployerEmployerIdPaySchedules(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['PaySchedules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].PaySchedules.$get(args, options))
}

export async function postEmployerEmployerIdPaySchedules(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['PaySchedules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].PaySchedules.$post(args, options))
}

export async function getEmployerEmployerIdPaySchedulesTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedules']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].PaySchedules.Tag[':TagId'].$get(args, options),
  )
}

export async function getEmployerEmployerIdPaySchedulesTags(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['PaySchedules']['Tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].PaySchedules.Tags.$get(args, options))
}

export async function getEmployerEmployerIdPensionPensionId(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Pension[':PensionId'].$get(args, options),
  )
}

export async function putEmployerEmployerIdPensionPensionId(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Pension[':PensionId'].$put(args, options),
  )
}

export async function deleteEmployerEmployerIdPensionPensionId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Pension[':PensionId'].$delete(args, options),
  )
}

export async function patchEmployerEmployerIdPensionPensionId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Pension[':PensionId'].$patch(args, options),
  )
}

export async function getEmployerEmployerIdPensionPensionIdRevisionRevisionNumber(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['Revision'][':RevisionNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Pension[':PensionId'].Revision[':RevisionNumber'].$get(
      args,
      options,
    ),
  )
}

export async function deleteEmployerEmployerIdPensionPensionIdRevisionRevisionNumber(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['Revision'][':RevisionNumber']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Pension[':PensionId'].Revision[':RevisionNumber'].$delete(
      args,
      options,
    ),
  )
}

export async function getEmployerEmployerIdPensionPensionIdRevisions(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['Revisions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Pension[':PensionId'].Revisions.$get(args, options),
  )
}

export async function getEmployerEmployerIdPensionPensionIdEffectiveDate(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Pension'][':PensionId'][':EffectiveDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Pension[':PensionId'][':EffectiveDate'].$get(args, options),
  )
}

export async function deleteEmployerEmployerIdPensionPensionIdEffectiveDate(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Pension'][':PensionId'][':EffectiveDate']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Pension[':PensionId'][':EffectiveDate'].$delete(args, options),
  )
}

export async function getEmployerEmployerIdPensions(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Pensions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].Pensions.$get(args, options))
}

export async function postEmployerEmployerIdPensions(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Pensions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].Pensions.$post(args, options))
}

export async function getEmployerEmployerIdPensionsEffectiveDate(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Pensions'][':EffectiveDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Pensions[':EffectiveDate'].$get(args, options),
  )
}

export async function getEmployerEmployerIdReportLineReportLineId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ReportLine'][':ReportLineId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].ReportLine[':ReportLineId'].$get(args, options),
  )
}

export async function getEmployerEmployerIdReportLines(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['ReportLines']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].ReportLines.$get(args, options))
}

export async function getEmployerEmployerIdReportingInstructionReportingInstructionId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ReportingInstruction'][':ReportingInstructionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].ReportingInstruction[':ReportingInstructionId'].$get(
      args,
      options,
    ),
  )
}

export async function putEmployerEmployerIdReportingInstructionReportingInstructionId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ReportingInstruction'][':ReportingInstructionId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].ReportingInstruction[':ReportingInstructionId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteEmployerEmployerIdReportingInstructionReportingInstructionId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ReportingInstruction'][':ReportingInstructionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].ReportingInstruction[':ReportingInstructionId'].$delete(
      args,
      options,
    ),
  )
}

export async function getEmployerEmployerIdReportingInstructions(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['ReportingInstructions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].ReportingInstructions.$get(args, options),
  )
}

export async function postEmployerEmployerIdReportingInstructions(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['ReportingInstructions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].ReportingInstructions.$post(args, options),
  )
}

export async function getEmployerEmployerIdRevisionRevisionNumber(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Revision'][':RevisionNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Revision[':RevisionNumber'].$get(args, options),
  )
}

export async function deleteEmployerEmployerIdRevisionRevisionNumber(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Revision'][':RevisionNumber']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Revision[':RevisionNumber'].$delete(args, options),
  )
}

export async function getEmployerEmployerIdRevisionRevisionNumberSummary(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Revision'][':RevisionNumber']['Summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Revision[':RevisionNumber'].Summary.$get(args, options),
  )
}

export async function getEmployerEmployerIdRevisions(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Revisions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].Revisions.$get(args, options))
}

export async function getEmployerEmployerIdRevisionsSummary(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Revisions']['Summary']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].Revisions.Summary.$get(args, options))
}

export async function getEmployerEmployerIdRtiTransactionRtiTransactionId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].RtiTransaction[':RtiTransactionId'].$get(args, options),
  )
}

export async function deleteEmployerEmployerIdRtiTransactionRtiTransactionId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].RtiTransaction[':RtiTransactionId'].$delete(args, options),
  )
}

export async function getEmployerEmployerIdRtiTransactionRtiTransactionIdSummary(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].RtiTransaction[':RtiTransactionId'].Summary.$get(args, options),
  )
}

export async function getEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].RtiTransaction[':RtiTransactionId'].Tag[':TagId'].$get(
      args,
      options,
    ),
  )
}

export async function putEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tag'][':TagId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].RtiTransaction[':RtiTransactionId'].Tag[':TagId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tag'][':TagId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].RtiTransaction[':RtiTransactionId'].Tag[':TagId'].$delete(
      args,
      options,
    ),
  )
}

export async function getEmployerEmployerIdRtiTransactionRtiTransactionIdTags(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].RtiTransaction[':RtiTransactionId'].Tags.$get(args, options),
  )
}

export async function getEmployerEmployerIdRtiTransactions(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['RtiTransactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].RtiTransactions.$get(args, options))
}

export async function getEmployerEmployerIdRtiTransactionsSummary(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransactions']['Summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].RtiTransactions.Summary.$get(args, options),
  )
}

export async function getEmployerEmployerIdRtiTransactionsTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransactions']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].RtiTransactions.Tag[':TagId'].$get(args, options),
  )
}

export async function getEmployerEmployerIdRtiTransactionsTags(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransactions']['Tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].RtiTransactions.Tags.$get(args, options),
  )
}

export async function getEmployerEmployerIdSecretSecretId(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Secret'][':SecretId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].Secret[':SecretId'].$get(args, options))
}

export async function putEmployerEmployerIdSecretSecretId(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Secret'][':SecretId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].Secret[':SecretId'].$put(args, options))
}

export async function deleteEmployerEmployerIdSecretSecretId(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Secret'][':SecretId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Secret[':SecretId'].$delete(args, options),
  )
}

export async function getEmployerEmployerIdSecrets(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Secrets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].Secrets.$get(args, options))
}

export async function postEmployerEmployerIdSecrets(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Secrets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].Secrets.$post(args, options))
}

export async function getEmployerEmployerIdSubContractorSubContractorId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].SubContractor[':SubContractorId'].$get(args, options),
  )
}

export async function putEmployerEmployerIdSubContractorSubContractorId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].SubContractor[':SubContractorId'].$put(args, options),
  )
}

export async function deleteEmployerEmployerIdSubContractorSubContractorId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].SubContractor[':SubContractorId'].$delete(args, options),
  )
}

export async function patchEmployerEmployerIdSubContractorSubContractorId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].SubContractor[':SubContractorId'].$patch(args, options),
  )
}

export async function getEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisInstruction[
      ':CisInstructionId'
    ].$get(args, options),
  )
}

export async function putEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisInstruction[
      ':CisInstructionId'
    ].$put(args, options),
  )
}

export async function deleteEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisInstruction[
      ':CisInstructionId'
    ].$delete(args, options),
  )
}

export async function patchEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisInstruction[
      ':CisInstructionId'
    ].$patch(args, options),
  )
}

export async function getEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisInstruction[
      ':CisInstructionId'
    ].Tag[':TagId'].$get(args, options),
  )
}

export async function putEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tag'][':TagId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisInstruction[
      ':CisInstructionId'
    ].Tag[':TagId'].$put(args, options),
  )
}

export async function deleteEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tag'][':TagId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisInstruction[
      ':CisInstructionId'
    ].Tag[':TagId'].$delete(args, options),
  )
}

export async function getEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTags(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisInstruction[
      ':CisInstructionId'
    ].Tags.$get(args, options),
  )
}

export async function getEmployerEmployerIdSubContractorSubContractorIdCisInstructions(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisInstructions.$get(
      args,
      options,
    ),
  )
}

export async function postEmployerEmployerIdSubContractorSubContractorIdCisInstructions(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisInstructions.$post(
      args,
      options,
    ),
  )
}

export async function getEmployerEmployerIdSubContractorSubContractorIdCisInstructionsTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisInstructions.Tag[
      ':TagId'
    ].$get(args, options),
  )
}

export async function getEmployerEmployerIdSubContractorSubContractorIdCisInstructionsTags(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['Tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisInstructions.Tags.$get(
      args,
      options,
    ),
  )
}

export async function getEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisLine[':CisLineId'].$get(
      args,
      options,
    ),
  )
}

export async function deleteEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisLine[':CisLineId'].$delete(
      args,
      options,
    ),
  )
}

export async function getEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisLine[':CisLineId'].Tag[
      ':TagId'
    ].$get(args, options),
  )
}

export async function putEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tag'][':TagId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisLine[':CisLineId'].Tag[
      ':TagId'
    ].$put(args, options),
  )
}

export async function deleteEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tag'][':TagId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisLine[':CisLineId'].Tag[
      ':TagId'
    ].$delete(args, options),
  )
}

export async function getEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTags(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisLine[
      ':CisLineId'
    ].Tags.$get(args, options),
  )
}

export async function getEmployerEmployerIdSubContractorSubContractorIdCisLines(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisLines.$get(args, options),
  )
}

export async function getEmployerEmployerIdSubContractorSubContractorIdCisLinesTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisLines.Tag[':TagId'].$get(
      args,
      options,
    ),
  )
}

export async function getEmployerEmployerIdSubContractorSubContractorIdCisLinesTags(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['Tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisLines.Tags.$get(
      args,
      options,
    ),
  )
}

export async function getEmployerEmployerIdSubContractorSubContractorIdJournalLines(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['JournalLines']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].SubContractor[':SubContractorId'].JournalLines.$get(
      args,
      options,
    ),
  )
}

export async function getEmployerEmployerIdSubContractorSubContractorIdRevisionRevisionNumber(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Revision'][':RevisionNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].SubContractor[':SubContractorId'].Revision[
      ':RevisionNumber'
    ].$get(args, options),
  )
}

export async function deleteEmployerEmployerIdSubContractorSubContractorIdRevisionRevisionNumber(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Revision'][':RevisionNumber']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].SubContractor[':SubContractorId'].Revision[
      ':RevisionNumber'
    ].$delete(args, options),
  )
}

export async function getEmployerEmployerIdSubContractorSubContractorIdRevisions(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Revisions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].SubContractor[':SubContractorId'].Revisions.$get(args, options),
  )
}

export async function getEmployerEmployerIdSubContractorSubContractorIdTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].SubContractor[':SubContractorId'].Tag[':TagId'].$get(
      args,
      options,
    ),
  )
}

export async function putEmployerEmployerIdSubContractorSubContractorIdTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].SubContractor[':SubContractorId'].Tag[':TagId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteEmployerEmployerIdSubContractorSubContractorIdTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].SubContractor[':SubContractorId'].Tag[':TagId'].$delete(
      args,
      options,
    ),
  )
}

export async function getEmployerEmployerIdSubContractorSubContractorIdTagTagIdEffectiveDate(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId'][':EffectiveDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].SubContractor[':SubContractorId'].Tag[':TagId'][
      ':EffectiveDate'
    ].$get(args, options),
  )
}

export async function getEmployerEmployerIdSubContractorSubContractorIdTags(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].SubContractor[':SubContractorId'].Tags.$get(args, options),
  )
}

export async function getEmployerEmployerIdSubContractorSubContractorIdTagsEffectiveDate(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tags'][':EffectiveDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].SubContractor[':SubContractorId'].Tags[':EffectiveDate'].$get(
      args,
      options,
    ),
  )
}

export async function getEmployerEmployerIdSubContractorSubContractorIdEffectiveDate(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId'][':EffectiveDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].SubContractor[':SubContractorId'][':EffectiveDate'].$get(
      args,
      options,
    ),
  )
}

export async function deleteEmployerEmployerIdSubContractorSubContractorIdEffectiveDate(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId'][':EffectiveDate']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].SubContractor[':SubContractorId'][':EffectiveDate'].$delete(
      args,
      options,
    ),
  )
}

export async function getEmployerEmployerIdSubContractors(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['SubContractors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].SubContractors.$get(args, options))
}

export async function postEmployerEmployerIdSubContractors(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['SubContractors']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].SubContractors.$post(args, options))
}

export async function getEmployerEmployerIdSubContractorsTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractors']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].SubContractors.Tag[':TagId'].$get(args, options),
  )
}

export async function getEmployerEmployerIdSubContractorsTags(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['SubContractors']['Tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].SubContractors.Tags.$get(args, options))
}

export async function getEmployerEmployerIdSubContractorsEffectiveDate(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractors'][':EffectiveDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].SubContractors[':EffectiveDate'].$get(args, options),
  )
}

export async function getEmployerEmployerIdSummary(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Summary']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].Summary.$get(args, options))
}

export async function getEmployerEmployerIdTagTagId(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Tag'][':TagId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].Tag[':TagId'].$get(args, options))
}

export async function putEmployerEmployerIdTagTagId(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Tag'][':TagId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].Tag[':TagId'].$put(args, options))
}

export async function deleteEmployerEmployerIdTagTagId(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Tag'][':TagId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].Tag[':TagId'].$delete(args, options))
}

export async function getEmployerEmployerIdTagTagIdEffectiveDate(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Tag'][':TagId'][':EffectiveDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Tag[':TagId'][':EffectiveDate'].$get(args, options),
  )
}

export async function getEmployerEmployerIdTags(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'].Tags.$get(args, options))
}

export async function getEmployerEmployerIdTagsEffectiveDate(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Tags'][':EffectiveDate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].Tags[':EffectiveDate'].$get(args, options),
  )
}

export async function getEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].ThirdPartyTransaction[':ThirdPartyTransactionId'].$get(
      args,
      options,
    ),
  )
}

export async function deleteEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].ThirdPartyTransaction[':ThirdPartyTransactionId'].$delete(
      args,
      options,
    ),
  )
}

export async function getEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].ThirdPartyTransaction[':ThirdPartyTransactionId'].Tag[
      ':TagId'
    ].$get(args, options),
  )
}

export async function putEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tag'][':TagId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].ThirdPartyTransaction[':ThirdPartyTransactionId'].Tag[
      ':TagId'
    ].$put(args, options),
  )
}

export async function deleteEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tag'][':TagId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].ThirdPartyTransaction[':ThirdPartyTransactionId'].Tag[
      ':TagId'
    ].$delete(args, options),
  )
}

export async function getEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTags(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].ThirdPartyTransaction[':ThirdPartyTransactionId'].Tags.$get(
      args,
      options,
    ),
  )
}

export async function getEmployerEmployerIdThirdPartyTransactions(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].ThirdPartyTransactions.$get(args, options),
  )
}

export async function getEmployerEmployerIdThirdPartyTransactionsTagTagId(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].ThirdPartyTransactions.Tag[':TagId'].$get(args, options),
  )
}

export async function getEmployerEmployerIdThirdPartyTransactionsTags(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['Tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'].ThirdPartyTransactions.Tags.$get(args, options),
  )
}

export async function getEmployerEmployerIdEffectiveDate(
  args: InferRequestType<(typeof client.Employer)[':EmployerId'][':EffectiveDate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employer[':EmployerId'][':EffectiveDate'].$get(args, options))
}

export async function deleteEmployerEmployerIdEffectiveDate(
  args: InferRequestType<(typeof client.Employer)[':EmployerId'][':EffectiveDate']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'][':EffectiveDate'].$delete(args, options),
  )
}

export async function getEmployerEmployerIdEffectiveDateSummary(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId'][':EffectiveDate']['Summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employer[':EmployerId'][':EffectiveDate'].Summary.$get(args, options),
  )
}

export async function getEmployers(
  args: InferRequestType<typeof client.Employers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employers.$get(args, options))
}

export async function postEmployers(
  args: InferRequestType<typeof client.Employers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employers.$post(args, options))
}

export async function getEmployersSummary(
  args: InferRequestType<typeof client.Employers.Summary.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employers.Summary.$get(args, options))
}

export async function getEmployersTagTagId(
  args: InferRequestType<(typeof client.Employers.Tag)[':TagId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employers.Tag[':TagId'].$get(args, options))
}

export async function getEmployersTags(
  args: InferRequestType<typeof client.Employers.Tags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employers.Tags.$get(args, options))
}

export async function getEmployersEffectiveDate(
  args: InferRequestType<(typeof client.Employers)[':EffectiveDate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employers[':EffectiveDate'].$get(args, options))
}

export async function getEmployersEffectiveDateSummary(
  args: InferRequestType<(typeof client.Employers)[':EffectiveDate']['Summary']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employers[':EffectiveDate'].Summary.$get(args, options))
}

export async function getHealthcheck(options?: ClientRequestOptions) {
  return await parseResponse(client.Healthcheck.$get(undefined, options))
}

export async function getJobsBatch(
  args: InferRequestType<typeof client.Jobs.Batch.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Jobs.Batch.$get(args, options))
}

export async function postJobsBatch(
  args: InferRequestType<typeof client.Jobs.Batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Jobs.Batch.$post(args, options))
}

export async function deleteJobsBatchJobId(
  args: InferRequestType<(typeof client.Jobs.Batch)[':JobId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Jobs.Batch[':JobId'].$delete(args, options))
}

export async function getJobsBatchJobIdInfo(
  args: InferRequestType<(typeof client.Jobs.Batch)[':JobId']['Info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Jobs.Batch[':JobId'].Info.$get(args, options))
}

export async function getJobsBatchJobIdProgress(
  args: InferRequestType<(typeof client.Jobs.Batch)[':JobId']['Progress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Jobs.Batch[':JobId'].Progress.$get(args, options))
}

export async function getJobsBatchJobIdStatus(
  args: InferRequestType<(typeof client.Jobs.Batch)[':JobId']['Status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Jobs.Batch[':JobId'].Status.$get(args, options))
}

export async function getJobsCis(
  args: InferRequestType<typeof client.Jobs.Cis.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Jobs.Cis.$get(args, options))
}

export async function postJobsCis(
  args: InferRequestType<typeof client.Jobs.Cis.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Jobs.Cis.$post(args, options))
}

export async function deleteJobsCisJobId(
  args: InferRequestType<(typeof client.Jobs.Cis)[':JobId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Jobs.Cis[':JobId'].$delete(args, options))
}

export async function getJobsCisJobIdInfo(
  args: InferRequestType<(typeof client.Jobs.Cis)[':JobId']['Info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Jobs.Cis[':JobId'].Info.$get(args, options))
}

export async function getJobsCisJobIdProgress(
  args: InferRequestType<(typeof client.Jobs.Cis)[':JobId']['Progress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Jobs.Cis[':JobId'].Progress.$get(args, options))
}

export async function getJobsCisJobIdStatus(
  args: InferRequestType<(typeof client.Jobs.Cis)[':JobId']['Status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Jobs.Cis[':JobId'].Status.$get(args, options))
}

export async function getJobsDps(
  args: InferRequestType<typeof client.Jobs.Dps.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Jobs.Dps.$get(args, options))
}

export async function postJobsDps(
  args: InferRequestType<typeof client.Jobs.Dps.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Jobs.Dps.$post(args, options))
}

export async function deleteJobsDpsJobId(
  args: InferRequestType<(typeof client.Jobs.Dps)[':JobId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Jobs.Dps[':JobId'].$delete(args, options))
}

export async function getJobsDpsJobIdInfo(
  args: InferRequestType<(typeof client.Jobs.Dps)[':JobId']['Info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Jobs.Dps[':JobId'].Info.$get(args, options))
}

export async function getJobsDpsJobIdProgress(
  args: InferRequestType<(typeof client.Jobs.Dps)[':JobId']['Progress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Jobs.Dps[':JobId'].Progress.$get(args, options))
}

export async function getJobsDpsJobIdStatus(
  args: InferRequestType<(typeof client.Jobs.Dps)[':JobId']['Status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Jobs.Dps[':JobId'].Status.$get(args, options))
}

export async function getJobsEmployerEmployerId(
  args: InferRequestType<(typeof client.Jobs.Employer)[':EmployerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Jobs.Employer[':EmployerId'].$get(args, options))
}

export async function getJobsPayRuns(
  args: InferRequestType<typeof client.Jobs.PayRuns.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Jobs.PayRuns.$get(args, options))
}

export async function postJobsPayRuns(
  args: InferRequestType<typeof client.Jobs.PayRuns.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Jobs.PayRuns.$post(args, options))
}

export async function deleteJobsPayRunsJobId(
  args: InferRequestType<(typeof client.Jobs.PayRuns)[':JobId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Jobs.PayRuns[':JobId'].$delete(args, options))
}

export async function getJobsPayRunsJobIdInfo(
  args: InferRequestType<(typeof client.Jobs.PayRuns)[':JobId']['Info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Jobs.PayRuns[':JobId'].Info.$get(args, options))
}

export async function getJobsPayRunsJobIdProgress(
  args: InferRequestType<(typeof client.Jobs.PayRuns)[':JobId']['Progress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Jobs.PayRuns[':JobId'].Progress.$get(args, options))
}

export async function getJobsPayRunsJobIdStatus(
  args: InferRequestType<(typeof client.Jobs.PayRuns)[':JobId']['Status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Jobs.PayRuns[':JobId'].Status.$get(args, options))
}

export async function getJobsRti(
  args: InferRequestType<typeof client.Jobs.Rti.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Jobs.Rti.$get(args, options))
}

export async function postJobsRti(
  args: InferRequestType<typeof client.Jobs.Rti.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Jobs.Rti.$post(args, options))
}

export async function deleteJobsRtiJobId(
  args: InferRequestType<(typeof client.Jobs.Rti)[':JobId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Jobs.Rti[':JobId'].$delete(args, options))
}

export async function getJobsRtiJobIdInfo(
  args: InferRequestType<(typeof client.Jobs.Rti)[':JobId']['Info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Jobs.Rti[':JobId'].Info.$get(args, options))
}

export async function getJobsRtiJobIdProgress(
  args: InferRequestType<(typeof client.Jobs.Rti)[':JobId']['Progress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Jobs.Rti[':JobId'].Progress.$get(args, options))
}

export async function getJobsRtiJobIdStatus(
  args: InferRequestType<(typeof client.Jobs.Rti)[':JobId']['Status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Jobs.Rti[':JobId'].Status.$get(args, options))
}

export async function getJobsThirdParty(
  args: InferRequestType<typeof client.Jobs.ThirdParty.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Jobs.ThirdParty.$get(args, options))
}

export async function postJobsThirdParty(
  args: InferRequestType<typeof client.Jobs.ThirdParty.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Jobs.ThirdParty.$post(args, options))
}

export async function deleteJobsThirdPartyJobId(
  args: InferRequestType<(typeof client.Jobs.ThirdParty)[':JobId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Jobs.ThirdParty[':JobId'].$delete(args, options))
}

export async function getJobsThirdPartyJobIdInfo(
  args: InferRequestType<(typeof client.Jobs.ThirdParty)[':JobId']['Info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Jobs.ThirdParty[':JobId'].Info.$get(args, options))
}

export async function getJobsThirdPartyJobIdProgress(
  args: InferRequestType<(typeof client.Jobs.ThirdParty)[':JobId']['Progress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Jobs.ThirdParty[':JobId'].Progress.$get(args, options))
}

export async function getJobsThirdPartyJobIdStatus(
  args: InferRequestType<(typeof client.Jobs.ThirdParty)[':JobId']['Status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Jobs.ThirdParty[':JobId'].Status.$get(args, options))
}

export async function getJournalInstructionJournalInstructionId(
  args: InferRequestType<(typeof client.JournalInstruction)[':JournalInstructionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.JournalInstruction[':JournalInstructionId'].$get(args, options))
}

export async function putJournalInstructionJournalInstructionId(
  args: InferRequestType<(typeof client.JournalInstruction)[':JournalInstructionId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.JournalInstruction[':JournalInstructionId'].$put(args, options))
}

export async function deleteJournalInstructionJournalInstructionId(
  args: InferRequestType<(typeof client.JournalInstruction)[':JournalInstructionId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.JournalInstruction[':JournalInstructionId'].$delete(args, options),
  )
}

export async function getJournalInstructions(
  args: InferRequestType<typeof client.JournalInstructions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.JournalInstructions.$get(args, options))
}

export async function postJournalInstructions(
  args: InferRequestType<typeof client.JournalInstructions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.JournalInstructions.$post(args, options))
}

export async function getPermissionPermissionId(
  args: InferRequestType<(typeof client.Permission)[':PermissionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Permission[':PermissionId'].$get(args, options))
}

export async function putPermissionPermissionId(
  args: InferRequestType<(typeof client.Permission)[':PermissionId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Permission[':PermissionId'].$put(args, options))
}

export async function deletePermissionPermissionId(
  args: InferRequestType<(typeof client.Permission)[':PermissionId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Permission[':PermissionId'].$delete(args, options))
}

export async function patchPermissionPermissionId(
  args: InferRequestType<(typeof client.Permission)[':PermissionId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Permission[':PermissionId'].$patch(args, options))
}

export async function getPermissionPermissionIdTagTagId(
  args: InferRequestType<(typeof client.Permission)[':PermissionId']['Tag'][':TagId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Permission[':PermissionId'].Tag[':TagId'].$get(args, options))
}

export async function putPermissionPermissionIdTagTagId(
  args: InferRequestType<(typeof client.Permission)[':PermissionId']['Tag'][':TagId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Permission[':PermissionId'].Tag[':TagId'].$put(args, options))
}

export async function deletePermissionPermissionIdTagTagId(
  args: InferRequestType<(typeof client.Permission)[':PermissionId']['Tag'][':TagId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Permission[':PermissionId'].Tag[':TagId'].$delete(args, options),
  )
}

export async function getPermissionPermissionIdTags(
  args: InferRequestType<(typeof client.Permission)[':PermissionId']['Tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Permission[':PermissionId'].Tags.$get(args, options))
}

export async function getPermissions(
  args: InferRequestType<typeof client.Permissions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Permissions.$get(args, options))
}

export async function postPermissions(
  args: InferRequestType<typeof client.Permissions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Permissions.$post(args, options))
}

export async function getPermissionsTagTagId(
  args: InferRequestType<(typeof client.Permissions.Tag)[':TagId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Permissions.Tag[':TagId'].$get(args, options))
}

export async function getPermissionsTags(
  args: InferRequestType<typeof client.Permissions.Tags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Permissions.Tags.$get(args, options))
}

export async function postQuery(
  args: InferRequestType<typeof client.Query.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Query.$post(args, options))
}

export async function getReferenceDataJournalExpressionDataTable(
  args: InferRequestType<typeof client.ReferenceData.JournalExpressionDataTable.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ReferenceData.JournalExpressionDataTable.$get(args, options))
}

export async function getReportACTPAYINSRun(
  args: InferRequestType<typeof client.Report.ACTPAYINS.run.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Report.ACTPAYINS.run.$get(args, options))
}

export async function getReportAOELIABILITYRun(
  args: InferRequestType<typeof client.Report.AOELIABILITY.run.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Report.AOELIABILITY.run.$get(args, options))
}

export async function getReportDPSMSGRun(
  args: InferRequestType<typeof client.Report.DPSMSG.run.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Report.DPSMSG.run.$get(args, options))
}

export async function getReportEMPSUMRun(
  args: InferRequestType<typeof client.Report.EMPSUM.run.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Report.EMPSUM.run.$get(args, options))
}

export async function getReportGRO2NETRun(
  args: InferRequestType<typeof client.Report.GRO2NET.run.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Report.GRO2NET.run.$get(args, options))
}

export async function getReportHOLBALRun(
  args: InferRequestType<typeof client.Report.HOLBAL.run.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Report.HOLBAL.run.$get(args, options))
}

export async function getReportJOURNALRun(
  args: InferRequestType<typeof client.Report.JOURNAL.run.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Report.JOURNAL.run.$get(args, options))
}

export async function getReportLASTPAYDATERun(
  args: InferRequestType<typeof client.Report.LASTPAYDATE.run.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Report.LASTPAYDATE.run.$get(args, options))
}

export async function getReportNETPAYRun(
  args: InferRequestType<typeof client.Report.NETPAY.run.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Report.NETPAY.run.$get(args, options))
}

export async function getReportNEXTPERIODRun(
  args: InferRequestType<typeof client.Report.NEXTPERIOD.run.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Report.NEXTPERIOD.run.$get(args, options))
}

export async function getReportP11SUMRun(
  args: InferRequestType<typeof client.Report.P11SUM.run.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Report.P11SUM.run.$get(args, options))
}

export async function getReportP32Run(
  args: InferRequestType<typeof client.Report.P32.run.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Report.P32.run.$get(args, options))
}

export async function getReportP32SUMRun(
  args: InferRequestType<typeof client.Report.P32SUM.run.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Report.P32SUM.run.$get(args, options))
}

export async function getReportP45Run(
  args: InferRequestType<typeof client.Report.P45.run.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Report.P45.run.$get(args, options))
}

export async function getReportP60Run(
  args: InferRequestType<typeof client.Report.P60.run.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Report.P60.run.$get(args, options))
}

export async function getReportPAPDISRun(
  args: InferRequestType<typeof client.Report.PAPDIS.run.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Report.PAPDIS.run.$get(args, options))
}

export async function getReportPASSRun(
  args: InferRequestType<typeof client.Report.PASS.run.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Report.PASS.run.$get(args, options))
}

export async function getReportPAYDASHBOARDRun(
  args: InferRequestType<typeof client.Report.PAYDASHBOARD.run.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Report.PAYDASHBOARD.run.$get(args, options))
}

export async function getReportPAYSLIP3Run(
  args: InferRequestType<typeof client.Report.PAYSLIP3.run.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Report.PAYSLIP3.run.$get(args, options))
}

export async function getReportPENLIABILITYRun(
  args: InferRequestType<typeof client.Report.PENLIABILITY.run.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Report.PENLIABILITY.run.$get(args, options))
}

export async function getReportReportDefinitionId(
  args: InferRequestType<(typeof client.Report)[':ReportDefinitionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Report[':ReportDefinitionId'].$get(args, options))
}

export async function putReportReportDefinitionId(
  args: InferRequestType<(typeof client.Report)[':ReportDefinitionId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Report[':ReportDefinitionId'].$put(args, options))
}

export async function deleteReportReportDefinitionId(
  args: InferRequestType<(typeof client.Report)[':ReportDefinitionId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Report[':ReportDefinitionId'].$delete(args, options))
}

export async function getReportReportDefinitionIdRun(
  args: InferRequestType<(typeof client.Report)[':ReportDefinitionId']['run']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Report[':ReportDefinitionId'].run.$get(args, options))
}

export async function getReports(
  args: InferRequestType<typeof client.Reports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Reports.$get(args, options))
}

export async function postReports(
  args: InferRequestType<typeof client.Reports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Reports.$post(args, options))
}

export async function getSchemas(
  args: InferRequestType<typeof client.Schemas.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Schemas.$get(args, options))
}

export async function getSchemasDtoDataType(
  args: InferRequestType<(typeof client.Schemas)[':DtoDataType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Schemas[':DtoDataType'].$get(args, options))
}

export async function getSecretSecretId(
  args: InferRequestType<(typeof client.Secret)[':SecretId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Secret[':SecretId'].$get(args, options))
}

export async function putSecretSecretId(
  args: InferRequestType<(typeof client.Secret)[':SecretId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Secret[':SecretId'].$put(args, options))
}

export async function deleteSecretSecretId(
  args: InferRequestType<(typeof client.Secret)[':SecretId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Secret[':SecretId'].$delete(args, options))
}

export async function getSecrets(
  args: InferRequestType<typeof client.Secrets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Secrets.$get(args, options))
}

export async function postSecrets(
  args: InferRequestType<typeof client.Secrets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Secrets.$post(args, options))
}

export async function getTemplateDtoDataType(
  args: InferRequestType<(typeof client.Template)[':DtoDataType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Template[':DtoDataType'].$get(args, options))
}

export async function getTemplates(
  args: InferRequestType<typeof client.Templates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Templates.$get(args, options))
}

export async function getTransformTransformDefinitionId(
  args: InferRequestType<(typeof client.Transform)[':TransformDefinitionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Transform[':TransformDefinitionId'].$get(args, options))
}

export async function putTransformTransformDefinitionId(
  args: InferRequestType<(typeof client.Transform)[':TransformDefinitionId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Transform[':TransformDefinitionId'].$put(args, options))
}

export async function deleteTransformTransformDefinitionId(
  args: InferRequestType<(typeof client.Transform)[':TransformDefinitionId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Transform[':TransformDefinitionId'].$delete(args, options))
}

export async function getTransforms(
  args: InferRequestType<typeof client.Transforms.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Transforms.$get(args, options))
}

export async function postTransforms(
  args: InferRequestType<typeof client.Transforms.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Transforms.$post(args, options))
}

export async function getUserUserId(
  args: InferRequestType<(typeof client.User)[':UserId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.User[':UserId'].$get(args, options))
}

export async function putUserUserId(
  args: InferRequestType<(typeof client.User)[':UserId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.User[':UserId'].$put(args, options))
}

export async function deleteUserUserId(
  args: InferRequestType<(typeof client.User)[':UserId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.User[':UserId'].$delete(args, options))
}

export async function patchUserUserId(
  args: InferRequestType<(typeof client.User)[':UserId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.User[':UserId'].$patch(args, options))
}

export async function getUserUserIdPermissions(
  args: InferRequestType<(typeof client.User)[':UserId']['Permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.User[':UserId'].Permissions.$get(args, options))
}

export async function getUserUserIdTagTagId(
  args: InferRequestType<(typeof client.User)[':UserId']['Tag'][':TagId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.User[':UserId'].Tag[':TagId'].$get(args, options))
}

export async function putUserUserIdTagTagId(
  args: InferRequestType<(typeof client.User)[':UserId']['Tag'][':TagId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.User[':UserId'].Tag[':TagId'].$put(args, options))
}

export async function deleteUserUserIdTagTagId(
  args: InferRequestType<(typeof client.User)[':UserId']['Tag'][':TagId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.User[':UserId'].Tag[':TagId'].$delete(args, options))
}

export async function getUserUserIdTags(
  args: InferRequestType<(typeof client.User)[':UserId']['Tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.User[':UserId'].Tags.$get(args, options))
}

export async function getUsers(
  args: InferRequestType<typeof client.Users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Users.$get(args, options))
}

export async function postUsers(
  args: InferRequestType<typeof client.Users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Users.$post(args, options))
}

export async function getUsersTagTagId(
  args: InferRequestType<(typeof client.Users.Tag)[':TagId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Users.Tag[':TagId'].$get(args, options))
}

export async function getUsersTags(
  args: InferRequestType<typeof client.Users.Tags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Users.Tags.$get(args, options))
}
