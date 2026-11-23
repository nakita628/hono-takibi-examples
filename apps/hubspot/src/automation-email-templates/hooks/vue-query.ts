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

export function getAutomationKey() {
  return ['automation'] as const
}

export function getAutomationEmailTemplates202609QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.automation)['email-templates']['2026-09']['$get']>
  >,
) {
  return ['automation', '/automation/email-templates/2026-09', toValue(args)] as const
}

export function getAutomationEmailTemplates202609QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.automation)['email-templates']['2026-09']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAutomationEmailTemplates202609QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.automation['email-templates']['2026-09'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAutomationEmailTemplates202609<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.automation)['email-templates']['2026-09']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.automation)['email-templates']['2026-09']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.automation)['email-templates']['2026-09']['$get']>
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
                  ReturnType<(typeof client.automation)['email-templates']['2026-09']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAutomationEmailTemplates202609QueryKey>
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
          Awaited<ReturnType<(typeof client.automation)['email-templates']['2026-09']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationEmailTemplates202609QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAutomationEmailTemplates202609QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.automation['email-templates']['2026-09'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAutomationEmailTemplates202609MutationKey() {
  return ['automation', '/automation/email-templates/2026-09', 'POST'] as const
}

export function getPostAutomationEmailTemplates202609MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.automation)['email-templates']['2026-09']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.automation)['email-templates']['2026-09']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAutomationEmailTemplates202609MutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.automation)['email-templates']['2026-09']['$post']>,
    ) {
      return parseResponse(client.automation['email-templates']['2026-09'].$post(args, options))
    },
  })
}

export function usePostAutomationEmailTemplates202609<
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
                  ReturnType<(typeof client.automation)['email-templates']['2026-09']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.automation)['email-templates']['2026-09']['$post']>,
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
  const mutationDefaults = getPostAutomationEmailTemplates202609MutationOptions<
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

export function getAutomationEmailTemplates202609FoldersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.automation)['email-templates']['2026-09']['folders']['$get']>
  >,
) {
  return ['automation', '/automation/email-templates/2026-09/folders', toValue(args)] as const
}

export function getAutomationEmailTemplates202609FoldersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.automation)['email-templates']['2026-09']['folders']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAutomationEmailTemplates202609FoldersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.automation['email-templates']['2026-09'].folders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAutomationEmailTemplates202609Folders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.automation)['email-templates']['2026-09']['folders']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.automation)['email-templates']['2026-09']['folders']['$get']>
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
                    (typeof client.automation)['email-templates']['2026-09']['folders']['$get']
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
                    (typeof client.automation)['email-templates']['2026-09']['folders']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAutomationEmailTemplates202609FoldersQueryKey>
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
            ReturnType<(typeof client.automation)['email-templates']['2026-09']['folders']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationEmailTemplates202609FoldersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAutomationEmailTemplates202609FoldersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.automation['email-templates']['2026-09'].folders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAutomationEmailTemplates202609TemplateIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.automation)['email-templates']['2026-09'][':templateId']['$get']
    >
  >,
) {
  return ['automation', '/automation/email-templates/2026-09/:templateId', toValue(args)] as const
}

export function getAutomationEmailTemplates202609TemplateIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.automation)['email-templates']['2026-09'][':templateId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAutomationEmailTemplates202609TemplateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.automation['email-templates']['2026-09'][':templateId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAutomationEmailTemplates202609TemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.automation)['email-templates']['2026-09'][':templateId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.automation)['email-templates']['2026-09'][':templateId']['$get']
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
                    (typeof client.automation)['email-templates']['2026-09'][':templateId']['$get']
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
                    (typeof client.automation)['email-templates']['2026-09'][':templateId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAutomationEmailTemplates202609TemplateIdQueryKey>
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
              (typeof client.automation)['email-templates']['2026-09'][':templateId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationEmailTemplates202609TemplateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAutomationEmailTemplates202609TemplateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.automation['email-templates']['2026-09'][':templateId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchAutomationEmailTemplates202609TemplateIdMutationKey() {
  return ['automation', '/automation/email-templates/2026-09/:templateId', 'PATCH'] as const
}

export function getPatchAutomationEmailTemplates202609TemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.automation)['email-templates']['2026-09'][':templateId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.automation)['email-templates']['2026-09'][':templateId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchAutomationEmailTemplates202609TemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.automation)['email-templates']['2026-09'][':templateId']['$patch']
      >,
    ) {
      return parseResponse(
        client.automation['email-templates']['2026-09'][':templateId'].$patch(args, options),
      )
    },
  })
}

export function usePatchAutomationEmailTemplates202609TemplateId<
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
                    (typeof client.automation)['email-templates']['2026-09'][':templateId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.automation)['email-templates']['2026-09'][':templateId']['$patch']
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
  const mutationDefaults = getPatchAutomationEmailTemplates202609TemplateIdMutationOptions<
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
