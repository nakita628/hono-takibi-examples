import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCrmKey() {
  return ['crm'] as const
}

export function getPostCrmExtensionsCalling202609InboundCallMutationKey() {
  return ['crm', '/crm/extensions/calling/2026-09/inbound-call', 'POST'] as const
}

export function getPostCrmExtensionsCalling202609InboundCallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.crm.extensions.calling)['2026-09']['inbound-call']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmExtensionsCalling202609InboundCallMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.extensions.calling)['2026-09']['inbound-call']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.extensions.calling['2026-09']['inbound-call'].$post(args, options),
      )
    },
  })
}

export function usePostCrmExtensionsCalling202609InboundCall<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.crm.extensions.calling)['2026-09']['inbound-call']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.crm.extensions.calling)['2026-09']['inbound-call']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmExtensionsCalling202609InboundCallMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCrmExtensionsCalling202609TranscriptsMutationKey() {
  return ['crm', '/crm/extensions/calling/2026-09/transcripts', 'POST'] as const
}

export function getPostCrmExtensionsCalling202609TranscriptsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.crm.extensions.calling)['2026-09']['transcripts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmExtensionsCalling202609TranscriptsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.extensions.calling)['2026-09']['transcripts']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.extensions.calling['2026-09'].transcripts.$post(args, options),
      )
    },
  })
}

export function usePostCrmExtensionsCalling202609Transcripts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.crm.extensions.calling)['2026-09']['transcripts']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.crm.extensions.calling)['2026-09']['transcripts']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmExtensionsCalling202609TranscriptsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCrmExtensionsCalling202609TranscriptsTranscriptIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm.extensions.calling)['2026-09']['transcripts'][':transcriptId']['$get']
    >
  >,
) {
  return [
    'crm',
    '/crm/extensions/calling/2026-09/transcripts/:transcriptId',
    toValue(args),
  ] as const
}

export function getCrmExtensionsCalling202609TranscriptsTranscriptIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm.extensions.calling)['2026-09']['transcripts'][':transcriptId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmExtensionsCalling202609TranscriptsTranscriptIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.extensions.calling['2026-09'].transcripts[':transcriptId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrmExtensionsCalling202609TranscriptsTranscriptId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm.extensions.calling)['2026-09']['transcripts'][':transcriptId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof getCrmExtensionsCalling202609TranscriptsTranscriptIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
    TError,
    TData,
    ReturnType<typeof getCrmExtensionsCalling202609TranscriptsTranscriptIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmExtensionsCalling202609TranscriptsTranscriptIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.extensions.calling['2026-09'].transcripts[':transcriptId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCrmExtensionsCalling202609TranscriptsTranscriptIdMutationKey() {
  return ['crm', '/crm/extensions/calling/2026-09/transcripts/:transcriptId', 'DELETE'] as const
}

export function getDeleteCrmExtensionsCalling202609TranscriptsTranscriptIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.crm.extensions.calling)['2026-09']['transcripts'][':transcriptId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCrmExtensionsCalling202609TranscriptsTranscriptIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.extensions.calling)['2026-09']['transcripts'][':transcriptId']['$delete']
      >,
    ) {
      return parseResponse(
        client.crm.extensions.calling['2026-09'].transcripts[':transcriptId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteCrmExtensionsCalling202609TranscriptsTranscriptId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.crm.extensions.calling)['2026-09']['transcripts'][':transcriptId']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteCrmExtensionsCalling202609TranscriptsTranscriptIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
