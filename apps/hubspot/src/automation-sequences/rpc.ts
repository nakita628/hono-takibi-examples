import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAutomationSequences202609(
  args: InferRequestType<(typeof client.automation.sequences)['2026-09']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automation.sequences['2026-09'].$get(args, options))
}

export async function postAutomationSequences202609Enrollments(
  args: InferRequestType<(typeof client.automation.sequences)['2026-09']['enrollments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automation.sequences['2026-09'].enrollments.$post(args, options),
  )
}

export async function getAutomationSequences202609EnrollmentsContactContactId(
  args: InferRequestType<
    (typeof client.automation.sequences)['2026-09']['enrollments']['contact'][':contactId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automation.sequences['2026-09'].enrollments.contact[':contactId'].$get(args, options),
  )
}

export async function postAutomationSequences202609ServiceaccountsEnrollments(
  args: InferRequestType<
    (typeof client.automation.sequences)['2026-09']['serviceaccounts']['enrollments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automation.sequences['2026-09'].serviceaccounts.enrollments.$post(args, options),
  )
}

export async function getAutomationSequences202609ServiceaccountsSequences(
  args: InferRequestType<
    (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automation.sequences['2026-09'].serviceaccounts.sequences.$get(args, options),
  )
}

export async function postAutomationSequences202609ServiceaccountsSequences(
  args: InferRequestType<
    (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automation.sequences['2026-09'].serviceaccounts.sequences.$post(args, options),
  )
}

export async function getAutomationSequences202609ServiceaccountsSequencesSequenceId(
  args: InferRequestType<
    (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automation.sequences['2026-09'].serviceaccounts.sequences[':sequenceId'].$get(
      args,
      options,
    ),
  )
}

export async function putAutomationSequences202609ServiceaccountsSequencesSequenceId(
  args: InferRequestType<
    (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automation.sequences['2026-09'].serviceaccounts.sequences[':sequenceId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteAutomationSequences202609ServiceaccountsSequencesSequenceId(
  args: InferRequestType<
    (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automation.sequences['2026-09'].serviceaccounts.sequences[':sequenceId'].$delete(
      args,
      options,
    ),
  )
}

export async function getAutomationSequences202609ServiceaccountsSequencesSequenceIdPerformance(
  args: InferRequestType<
    (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['performance']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automation.sequences['2026-09'].serviceaccounts.sequences[
      ':sequenceId'
    ].performance.$get(args, options),
  )
}

export async function getAutomationSequences202609SequenceId(
  args: InferRequestType<(typeof client.automation.sequences)['2026-09'][':sequenceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automation.sequences['2026-09'][':sequenceId'].$get(args, options),
  )
}
