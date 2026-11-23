import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCrmKey() {
  return ['crm'] as const
}

export function getPostCrmExtensionsCalling202609InboundCallKey() {
  return ['crm', '/crm/extensions/calling/2026-09/inbound-call', 'POST'] as const
}

export function usePostCrmExtensionsCalling202609InboundCall<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.extensions.calling)['2026-09']['inbound-call']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.extensions.calling)['2026-09']['inbound-call']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmExtensionsCalling202609InboundCallKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.crm.extensions.calling)['2026-09']['inbound-call']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.extensions.calling['2026-09']['inbound-call'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCrmExtensionsCalling202609TranscriptsKey() {
  return ['crm', '/crm/extensions/calling/2026-09/transcripts', 'POST'] as const
}

export function usePostCrmExtensionsCalling202609Transcripts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.extensions.calling)['2026-09']['transcripts']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.extensions.calling)['2026-09']['transcripts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmExtensionsCalling202609TranscriptsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.crm.extensions.calling)['2026-09']['transcripts']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.extensions.calling['2026-09'].transcripts.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCrmExtensionsCalling202609TranscriptsTranscriptIdKey(
  args: InferRequestType<
    (typeof client.crm.extensions.calling)['2026-09']['transcripts'][':transcriptId']['$get']
  >,
) {
  return ['crm', '/crm/extensions/calling/2026-09/transcripts/:transcriptId', args] as const
}

export function useGetCrmExtensionsCalling202609TranscriptsTranscriptId<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.extensions.calling)['2026-09']['transcripts'][':transcriptId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.extensions.calling)['2026-09']['transcripts'][':transcriptId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCrmExtensionsCalling202609TranscriptsTranscriptIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.extensions.calling)['2026-09']['transcripts'][':transcriptId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.crm.extensions.calling['2026-09'].transcripts[':transcriptId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmExtensionsCalling202609TranscriptsTranscriptId<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.extensions.calling)['2026-09']['transcripts'][':transcriptId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.extensions.calling)['2026-09']['transcripts'][':transcriptId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCrmExtensionsCalling202609TranscriptsTranscriptIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.extensions.calling)['2026-09']['transcripts'][':transcriptId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.crm.extensions.calling['2026-09'].transcripts[':transcriptId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteCrmExtensionsCalling202609TranscriptsTranscriptIdKey() {
  return ['crm', '/crm/extensions/calling/2026-09/transcripts/:transcriptId', 'DELETE'] as const
}

export function useDeleteCrmExtensionsCalling202609TranscriptsTranscriptId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.extensions.calling)['2026-09']['transcripts'][':transcriptId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.extensions.calling)['2026-09']['transcripts'][':transcriptId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCrmExtensionsCalling202609TranscriptsTranscriptIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.crm.extensions.calling)['2026-09']['transcripts'][':transcriptId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.crm.extensions.calling['2026-09'].transcripts[':transcriptId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
