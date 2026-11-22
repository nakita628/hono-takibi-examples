import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiQueryKey() {
  return ['api', '/api'] as const
}

export function getApiQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApi<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.$get>>>>>,
          ReturnType<typeof getApiQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiAbilityScoresIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['ability-scores'][':index']['$get']>>,
) {
  return ['api', '/api/ability-scores/:index', toValue(args)] as const
}

export function getApiAbilityScoresIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['ability-scores'][':index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAbilityScoresIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['ability-scores'][':index'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAbilityScoresIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['ability-scores'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['ability-scores'][':index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['ability-scores'][':index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['ability-scores'][':index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiAbilityScoresIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['ability-scores'][':index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAbilityScoresIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAbilityScoresIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['ability-scores'][':index'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiAlignmentsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.alignments)[':index']['$get']>>,
) {
  return ['api', '/api/alignments/:index', toValue(args)] as const
}

export function getApiAlignmentsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.alignments)[':index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAlignmentsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.alignments[':index'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAlignmentsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.alignments)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.alignments)[':index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.alignments)[':index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.alignments)[':index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiAlignmentsIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.alignments)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAlignmentsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAlignmentsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.alignments[':index'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiBackgroundsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.backgrounds)[':index']['$get']>>,
) {
  return ['api', '/api/backgrounds/:index', toValue(args)] as const
}

export function getApiBackgroundsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.backgrounds)[':index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiBackgroundsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.backgrounds[':index'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiBackgroundsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.backgrounds)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.backgrounds)[':index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.backgrounds)[':index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.backgrounds)[':index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiBackgroundsIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.backgrounds)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBackgroundsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiBackgroundsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.backgrounds[':index'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiClassesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.classes)[':index']['$get']>>,
) {
  return ['api', '/api/classes/:index', toValue(args)] as const
}

export function getApiClassesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.classes)[':index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiClassesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.classes[':index'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiClassesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.classes)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.classes)[':index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.classes)[':index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.classes)[':index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiClassesIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.classes)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClassesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiClassesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.classes[':index'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiClassesIndexFeaturesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.classes)[':index']['features']['$get']>
  >,
) {
  return ['api', '/api/classes/:index/features', toValue(args)] as const
}

export function getApiClassesIndexFeaturesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.classes)[':index']['features']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiClassesIndexFeaturesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.classes[':index'].features.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiClassesIndexFeatures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['features']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.classes)[':index']['features']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.classes)[':index']['features']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.classes)[':index']['features']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiClassesIndexFeaturesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.classes)[':index']['features']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClassesIndexFeaturesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiClassesIndexFeaturesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.classes[':index'].features.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiClassesIndexLevelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.classes)[':index']['levels']['$get']>>,
) {
  return ['api', '/api/classes/:index/levels', toValue(args)] as const
}

export function getApiClassesIndexLevelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.classes)[':index']['levels']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiClassesIndexLevelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.classes[':index'].levels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiClassesIndexLevels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['levels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.classes)[':index']['levels']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.classes)[':index']['levels']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.classes)[':index']['levels']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiClassesIndexLevelsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.classes)[':index']['levels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClassesIndexLevelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiClassesIndexLevelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.classes[':index'].levels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiClassesIndexLevelsClassLevelQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.classes)[':index']['levels'][':class_level']['$get']>
  >,
) {
  return ['api', '/api/classes/:index/levels/:class_level', toValue(args)] as const
}

export function getApiClassesIndexLevelsClassLevelQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.classes)[':index']['levels'][':class_level']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiClassesIndexLevelsClassLevelQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.classes[':index'].levels[':class_level'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiClassesIndexLevelsClassLevel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['levels'][':class_level']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.classes)[':index']['levels'][':class_level']['$get']>
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
                    (typeof client.api.classes)[':index']['levels'][':class_level']['$get']
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
                    (typeof client.api.classes)[':index']['levels'][':class_level']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiClassesIndexLevelsClassLevelQueryKey>
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
            ReturnType<(typeof client.api.classes)[':index']['levels'][':class_level']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClassesIndexLevelsClassLevelQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiClassesIndexLevelsClassLevelQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.classes[':index'].levels[':class_level'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiClassesIndexLevelsClassLevelFeaturesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.classes)[':index']['levels'][':class_level']['features']['$get']
    >
  >,
) {
  return ['api', '/api/classes/:index/levels/:class_level/features', toValue(args)] as const
}

export function getApiClassesIndexLevelsClassLevelFeaturesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.classes)[':index']['levels'][':class_level']['features']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiClassesIndexLevelsClassLevelFeaturesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.classes[':index'].levels[':class_level'].features.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiClassesIndexLevelsClassLevelFeatures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.classes)[':index']['levels'][':class_level']['features']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.classes)[':index']['levels'][':class_level']['features']['$get']
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
                    (typeof client.api.classes)[':index']['levels'][':class_level']['features']['$get']
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
                    (typeof client.api.classes)[':index']['levels'][':class_level']['features']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiClassesIndexLevelsClassLevelFeaturesQueryKey>
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
              (typeof client.api.classes)[':index']['levels'][':class_level']['features']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClassesIndexLevelsClassLevelFeaturesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiClassesIndexLevelsClassLevelFeaturesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.classes[':index'].levels[':class_level'].features.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiClassesIndexLevelsSpellLevelSpellsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.classes)[':index']['levels'][':spell_level']['spells']['$get']
    >
  >,
) {
  return ['api', '/api/classes/:index/levels/:spell_level/spells', toValue(args)] as const
}

export function getApiClassesIndexLevelsSpellLevelSpellsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.classes)[':index']['levels'][':spell_level']['spells']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiClassesIndexLevelsSpellLevelSpellsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.classes[':index'].levels[':spell_level'].spells.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiClassesIndexLevelsSpellLevelSpells<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.classes)[':index']['levels'][':spell_level']['spells']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.classes)[':index']['levels'][':spell_level']['spells']['$get']
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
                    (typeof client.api.classes)[':index']['levels'][':spell_level']['spells']['$get']
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
                    (typeof client.api.classes)[':index']['levels'][':spell_level']['spells']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiClassesIndexLevelsSpellLevelSpellsQueryKey>
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
              (typeof client.api.classes)[':index']['levels'][':spell_level']['spells']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClassesIndexLevelsSpellLevelSpellsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiClassesIndexLevelsSpellLevelSpellsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.classes[':index'].levels[':spell_level'].spells.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiClassesIndexMultiClassingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.classes)[':index']['multi-classing']['$get']>
  >,
) {
  return ['api', '/api/classes/:index/multi-classing', toValue(args)] as const
}

export function getApiClassesIndexMultiClassingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.classes)[':index']['multi-classing']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiClassesIndexMultiClassingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.classes[':index']['multi-classing'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiClassesIndexMultiClassing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['multi-classing']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.classes)[':index']['multi-classing']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.classes)[':index']['multi-classing']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.classes)[':index']['multi-classing']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiClassesIndexMultiClassingQueryKey>
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
          Awaited<ReturnType<(typeof client.api.classes)[':index']['multi-classing']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClassesIndexMultiClassingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiClassesIndexMultiClassingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.classes[':index']['multi-classing'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiClassesIndexProficienciesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.classes)[':index']['proficiencies']['$get']>
  >,
) {
  return ['api', '/api/classes/:index/proficiencies', toValue(args)] as const
}

export function getApiClassesIndexProficienciesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.classes)[':index']['proficiencies']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiClassesIndexProficienciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.classes[':index'].proficiencies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiClassesIndexProficiencies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['proficiencies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.classes)[':index']['proficiencies']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.classes)[':index']['proficiencies']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.classes)[':index']['proficiencies']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiClassesIndexProficienciesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.classes)[':index']['proficiencies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClassesIndexProficienciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiClassesIndexProficienciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.classes[':index'].proficiencies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiClassesIndexSpellcastingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.classes)[':index']['spellcasting']['$get']>
  >,
) {
  return ['api', '/api/classes/:index/spellcasting', toValue(args)] as const
}

export function getApiClassesIndexSpellcastingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.classes)[':index']['spellcasting']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiClassesIndexSpellcastingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.classes[':index'].spellcasting.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiClassesIndexSpellcasting<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['spellcasting']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.classes)[':index']['spellcasting']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.classes)[':index']['spellcasting']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.classes)[':index']['spellcasting']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiClassesIndexSpellcastingQueryKey>
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
          Awaited<ReturnType<(typeof client.api.classes)[':index']['spellcasting']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClassesIndexSpellcastingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiClassesIndexSpellcastingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.classes[':index'].spellcasting.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiClassesIndexSpellsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.classes)[':index']['spells']['$get']>>,
) {
  return ['api', '/api/classes/:index/spells', toValue(args)] as const
}

export function getApiClassesIndexSpellsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.classes)[':index']['spells']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiClassesIndexSpellsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.classes[':index'].spells.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiClassesIndexSpells<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['spells']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.classes)[':index']['spells']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.classes)[':index']['spells']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.classes)[':index']['spells']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiClassesIndexSpellsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.classes)[':index']['spells']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClassesIndexSpellsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiClassesIndexSpellsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.classes[':index'].spells.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiClassesIndexSubclassesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.classes)[':index']['subclasses']['$get']>
  >,
) {
  return ['api', '/api/classes/:index/subclasses', toValue(args)] as const
}

export function getApiClassesIndexSubclassesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.classes)[':index']['subclasses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiClassesIndexSubclassesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.classes[':index'].subclasses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiClassesIndexSubclasses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['subclasses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.classes)[':index']['subclasses']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.classes)[':index']['subclasses']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.classes)[':index']['subclasses']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiClassesIndexSubclassesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.classes)[':index']['subclasses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClassesIndexSubclassesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiClassesIndexSubclassesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.classes[':index'].subclasses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiConditionsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.conditions)[':index']['$get']>>,
) {
  return ['api', '/api/conditions/:index', toValue(args)] as const
}

export function getApiConditionsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.conditions)[':index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiConditionsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.conditions[':index'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiConditionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.conditions)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.conditions)[':index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.conditions)[':index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.conditions)[':index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiConditionsIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.conditions)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiConditionsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiConditionsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.conditions[':index'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiDamageTypesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['damage-types'][':index']['$get']>>,
) {
  return ['api', '/api/damage-types/:index', toValue(args)] as const
}

export function getApiDamageTypesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['damage-types'][':index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDamageTypesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['damage-types'][':index'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDamageTypesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['damage-types'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['damage-types'][':index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['damage-types'][':index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['damage-types'][':index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiDamageTypesIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['damage-types'][':index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDamageTypesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiDamageTypesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['damage-types'][':index'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiEquipmentCategoriesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['equipment-categories'][':index']['$get']>
  >,
) {
  return ['api', '/api/equipment-categories/:index', toValue(args)] as const
}

export function getApiEquipmentCategoriesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['equipment-categories'][':index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiEquipmentCategoriesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['equipment-categories'][':index'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiEquipmentCategoriesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['equipment-categories'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['equipment-categories'][':index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['equipment-categories'][':index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['equipment-categories'][':index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiEquipmentCategoriesIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['equipment-categories'][':index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiEquipmentCategoriesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiEquipmentCategoriesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['equipment-categories'][':index'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiEquipmentIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.equipment)[':index']['$get']>>,
) {
  return ['api', '/api/equipment/:index', toValue(args)] as const
}

export function getApiEquipmentIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.equipment)[':index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiEquipmentIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.equipment[':index'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiEquipmentIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.equipment)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.equipment)[':index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.equipment)[':index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.equipment)[':index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiEquipmentIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.equipment)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiEquipmentIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiEquipmentIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.equipment[':index'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiFeatsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.feats)[':index']['$get']>>,
) {
  return ['api', '/api/feats/:index', toValue(args)] as const
}

export function getApiFeatsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.feats)[':index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiFeatsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.feats[':index'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiFeatsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.feats)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.feats)[':index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.feats)[':index']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.feats)[':index']['$get']>>>
            >
          >,
          ReturnType<typeof getApiFeatsIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.feats)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFeatsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiFeatsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.feats[':index'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiFeaturesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.features)[':index']['$get']>>,
) {
  return ['api', '/api/features/:index', toValue(args)] as const
}

export function getApiFeaturesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.features)[':index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiFeaturesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.features[':index'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiFeaturesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.features)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.features)[':index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.features)[':index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.features)[':index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiFeaturesIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.features)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFeaturesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiFeaturesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.features[':index'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiLanguagesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.languages)[':index']['$get']>>,
) {
  return ['api', '/api/languages/:index', toValue(args)] as const
}

export function getApiLanguagesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.languages)[':index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLanguagesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.languages[':index'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLanguagesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.languages)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.languages)[':index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.languages)[':index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.languages)[':index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiLanguagesIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.languages)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLanguagesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLanguagesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.languages[':index'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiMagicItemsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['magic-items'][':index']['$get']>>,
) {
  return ['api', '/api/magic-items/:index', toValue(args)] as const
}

export function getApiMagicItemsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['magic-items'][':index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMagicItemsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['magic-items'][':index'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiMagicItemsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['magic-items'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['magic-items'][':index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['magic-items'][':index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['magic-items'][':index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiMagicItemsIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['magic-items'][':index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMagicItemsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMagicItemsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['magic-items'][':index'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiMagicSchoolsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['magic-schools'][':index']['$get']>>,
) {
  return ['api', '/api/magic-schools/:index', toValue(args)] as const
}

export function getApiMagicSchoolsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['magic-schools'][':index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMagicSchoolsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['magic-schools'][':index'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiMagicSchoolsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['magic-schools'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['magic-schools'][':index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['magic-schools'][':index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['magic-schools'][':index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiMagicSchoolsIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['magic-schools'][':index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMagicSchoolsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMagicSchoolsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['magic-schools'][':index'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiMonstersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.monsters.$get>>,
) {
  return ['api', '/api/monsters', toValue(args)] as const
}

export function getApiMonstersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.monsters.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMonstersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.monsters.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiMonsters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.monsters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.monsters.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.monsters.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.monsters.$get>>>>
          >,
          ReturnType<typeof getApiMonstersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.monsters.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiMonstersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMonstersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.monsters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiMonstersIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.monsters)[':index']['$get']>>,
) {
  return ['api', '/api/monsters/:index', toValue(args)] as const
}

export function getApiMonstersIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.monsters)[':index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMonstersIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.monsters[':index'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiMonstersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.monsters)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.monsters)[':index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.monsters)[':index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.monsters)[':index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiMonstersIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.monsters)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMonstersIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMonstersIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.monsters[':index'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiProficienciesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.proficiencies)[':index']['$get']>>,
) {
  return ['api', '/api/proficiencies/:index', toValue(args)] as const
}

export function getApiProficienciesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.proficiencies)[':index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiProficienciesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.proficiencies[':index'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiProficienciesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.proficiencies)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.proficiencies)[':index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.proficiencies)[':index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.proficiencies)[':index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiProficienciesIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.proficiencies)[':index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProficienciesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiProficienciesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.proficiencies[':index'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiRacesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.races)[':index']['$get']>>,
) {
  return ['api', '/api/races/:index', toValue(args)] as const
}

export function getApiRacesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.races)[':index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiRacesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.races[':index'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiRacesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.races)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.races)[':index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.races)[':index']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.races)[':index']['$get']>>>
            >
          >,
          ReturnType<typeof getApiRacesIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.races)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRacesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiRacesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.races[':index'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiRacesIndexProficienciesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.races)[':index']['proficiencies']['$get']>
  >,
) {
  return ['api', '/api/races/:index/proficiencies', toValue(args)] as const
}

export function getApiRacesIndexProficienciesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.races)[':index']['proficiencies']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiRacesIndexProficienciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.races[':index'].proficiencies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiRacesIndexProficiencies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.races)[':index']['proficiencies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.races)[':index']['proficiencies']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.races)[':index']['proficiencies']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.races)[':index']['proficiencies']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiRacesIndexProficienciesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.races)[':index']['proficiencies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRacesIndexProficienciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiRacesIndexProficienciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.races[':index'].proficiencies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiRacesIndexSubracesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.races)[':index']['subraces']['$get']>>,
) {
  return ['api', '/api/races/:index/subraces', toValue(args)] as const
}

export function getApiRacesIndexSubracesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.races)[':index']['subraces']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiRacesIndexSubracesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.races[':index'].subraces.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiRacesIndexSubraces<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.races)[':index']['subraces']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.races)[':index']['subraces']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.races)[':index']['subraces']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.races)[':index']['subraces']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiRacesIndexSubracesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.races)[':index']['subraces']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRacesIndexSubracesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiRacesIndexSubracesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.races[':index'].subraces.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiRacesIndexTraitsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.races)[':index']['traits']['$get']>>,
) {
  return ['api', '/api/races/:index/traits', toValue(args)] as const
}

export function getApiRacesIndexTraitsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.races)[':index']['traits']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiRacesIndexTraitsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.races[':index'].traits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiRacesIndexTraits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.races)[':index']['traits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.races)[':index']['traits']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.races)[':index']['traits']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.races)[':index']['traits']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiRacesIndexTraitsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.races)[':index']['traits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRacesIndexTraitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiRacesIndexTraitsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.races[':index'].traits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiRuleSectionsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['rule-sections'][':index']['$get']>>,
) {
  return ['api', '/api/rule-sections/:index', toValue(args)] as const
}

export function getApiRuleSectionsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['rule-sections'][':index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiRuleSectionsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['rule-sections'][':index'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiRuleSectionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['rule-sections'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['rule-sections'][':index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['rule-sections'][':index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['rule-sections'][':index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiRuleSectionsIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['rule-sections'][':index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRuleSectionsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiRuleSectionsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['rule-sections'][':index'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiRulesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.rules)[':index']['$get']>>,
) {
  return ['api', '/api/rules/:index', toValue(args)] as const
}

export function getApiRulesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.rules)[':index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiRulesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.rules[':index'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiRulesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.rules)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.rules)[':index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.rules)[':index']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.rules)[':index']['$get']>>>
            >
          >,
          ReturnType<typeof getApiRulesIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.rules)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRulesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiRulesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.rules[':index'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSkillsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.skills)[':index']['$get']>>,
) {
  return ['api', '/api/skills/:index', toValue(args)] as const
}

export function getApiSkillsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.skills)[':index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSkillsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.skills[':index'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSkillsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.skills)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.skills)[':index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.skills)[':index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.skills)[':index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiSkillsIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.skills)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSkillsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSkillsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.skills[':index'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSpellsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.spells.$get>>,
) {
  return ['api', '/api/spells', toValue(args)] as const
}

export function getApiSpellsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.spells.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSpellsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.spells.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiSpells<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.spells.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.spells.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.spells.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.spells.$get>>>>
          >,
          ReturnType<typeof getApiSpellsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.spells.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiSpellsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSpellsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.spells.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSpellsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.spells)[':index']['$get']>>,
) {
  return ['api', '/api/spells/:index', toValue(args)] as const
}

export function getApiSpellsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.spells)[':index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSpellsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.spells[':index'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSpellsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.spells)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.spells)[':index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.spells)[':index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.spells)[':index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiSpellsIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.spells)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpellsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSpellsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.spells[':index'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSubclassesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.subclasses)[':index']['$get']>>,
) {
  return ['api', '/api/subclasses/:index', toValue(args)] as const
}

export function getApiSubclassesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.subclasses)[':index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSubclassesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.subclasses[':index'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSubclassesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.subclasses)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.subclasses)[':index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.subclasses)[':index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.subclasses)[':index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiSubclassesIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.subclasses)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSubclassesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSubclassesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.subclasses[':index'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSubclassesIndexFeaturesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.subclasses)[':index']['features']['$get']>
  >,
) {
  return ['api', '/api/subclasses/:index/features', toValue(args)] as const
}

export function getApiSubclassesIndexFeaturesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.subclasses)[':index']['features']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSubclassesIndexFeaturesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.subclasses[':index'].features.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSubclassesIndexFeatures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.subclasses)[':index']['features']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.subclasses)[':index']['features']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.subclasses)[':index']['features']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.subclasses)[':index']['features']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiSubclassesIndexFeaturesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.subclasses)[':index']['features']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSubclassesIndexFeaturesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSubclassesIndexFeaturesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.subclasses[':index'].features.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSubclassesIndexLevelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.subclasses)[':index']['levels']['$get']>
  >,
) {
  return ['api', '/api/subclasses/:index/levels', toValue(args)] as const
}

export function getApiSubclassesIndexLevelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.subclasses)[':index']['levels']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSubclassesIndexLevelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.subclasses[':index'].levels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSubclassesIndexLevels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.subclasses)[':index']['levels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.subclasses)[':index']['levels']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.subclasses)[':index']['levels']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.subclasses)[':index']['levels']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiSubclassesIndexLevelsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.subclasses)[':index']['levels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSubclassesIndexLevelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSubclassesIndexLevelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.subclasses[':index'].levels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSubclassesIndexLevelsSubclassLevelQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.subclasses)[':index']['levels'][':subclass_level']['$get']>
  >,
) {
  return ['api', '/api/subclasses/:index/levels/:subclass_level', toValue(args)] as const
}

export function getApiSubclassesIndexLevelsSubclassLevelQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.subclasses)[':index']['levels'][':subclass_level']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSubclassesIndexLevelsSubclassLevelQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.subclasses[':index'].levels[':subclass_level'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSubclassesIndexLevelsSubclassLevel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.subclasses)[':index']['levels'][':subclass_level']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.subclasses)[':index']['levels'][':subclass_level']['$get']>
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
                    (typeof client.api.subclasses)[':index']['levels'][':subclass_level']['$get']
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
                    (typeof client.api.subclasses)[':index']['levels'][':subclass_level']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiSubclassesIndexLevelsSubclassLevelQueryKey>
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
              (typeof client.api.subclasses)[':index']['levels'][':subclass_level']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSubclassesIndexLevelsSubclassLevelQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSubclassesIndexLevelsSubclassLevelQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.subclasses[':index'].levels[':subclass_level'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSubclassesIndexLevelsSubclassLevelFeaturesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.subclasses)[':index']['levels'][':subclass_level']['features']['$get']
    >
  >,
) {
  return ['api', '/api/subclasses/:index/levels/:subclass_level/features', toValue(args)] as const
}

export function getApiSubclassesIndexLevelsSubclassLevelFeaturesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.subclasses)[':index']['levels'][':subclass_level']['features']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSubclassesIndexLevelsSubclassLevelFeaturesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.subclasses[':index'].levels[':subclass_level'].features.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSubclassesIndexLevelsSubclassLevelFeatures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.subclasses)[':index']['levels'][':subclass_level']['features']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.subclasses)[':index']['levels'][':subclass_level']['features']['$get']
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
                    (typeof client.api.subclasses)[':index']['levels'][':subclass_level']['features']['$get']
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
                    (typeof client.api.subclasses)[':index']['levels'][':subclass_level']['features']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiSubclassesIndexLevelsSubclassLevelFeaturesQueryKey>
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
              (typeof client.api.subclasses)[':index']['levels'][':subclass_level']['features']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSubclassesIndexLevelsSubclassLevelFeaturesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSubclassesIndexLevelsSubclassLevelFeaturesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.subclasses[':index'].levels[':subclass_level'].features.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSubracesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.subraces)[':index']['$get']>>,
) {
  return ['api', '/api/subraces/:index', toValue(args)] as const
}

export function getApiSubracesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.subraces)[':index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSubracesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.subraces[':index'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSubracesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.subraces)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.subraces)[':index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.subraces)[':index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.subraces)[':index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiSubracesIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.subraces)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSubracesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSubracesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.subraces[':index'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSubracesIndexProficienciesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.subraces)[':index']['proficiencies']['$get']>
  >,
) {
  return ['api', '/api/subraces/:index/proficiencies', toValue(args)] as const
}

export function getApiSubracesIndexProficienciesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.subraces)[':index']['proficiencies']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSubracesIndexProficienciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.subraces[':index'].proficiencies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSubracesIndexProficiencies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.subraces)[':index']['proficiencies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.subraces)[':index']['proficiencies']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.subraces)[':index']['proficiencies']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.subraces)[':index']['proficiencies']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiSubracesIndexProficienciesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.subraces)[':index']['proficiencies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSubracesIndexProficienciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSubracesIndexProficienciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.subraces[':index'].proficiencies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSubracesIndexTraitsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.subraces)[':index']['traits']['$get']>
  >,
) {
  return ['api', '/api/subraces/:index/traits', toValue(args)] as const
}

export function getApiSubracesIndexTraitsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.subraces)[':index']['traits']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSubracesIndexTraitsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.subraces[':index'].traits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSubracesIndexTraits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.subraces)[':index']['traits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.subraces)[':index']['traits']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.subraces)[':index']['traits']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.subraces)[':index']['traits']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiSubracesIndexTraitsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.subraces)[':index']['traits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSubracesIndexTraitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSubracesIndexTraitsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.subraces[':index'].traits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTraitsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.traits)[':index']['$get']>>,
) {
  return ['api', '/api/traits/:index', toValue(args)] as const
}

export function getApiTraitsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.traits)[':index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTraitsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.traits[':index'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTraitsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.traits)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.traits)[':index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.traits)[':index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.traits)[':index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTraitsIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.traits)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTraitsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTraitsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.traits[':index'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiWeaponPropertiesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['weapon-properties'][':index']['$get']>
  >,
) {
  return ['api', '/api/weapon-properties/:index', toValue(args)] as const
}

export function getApiWeaponPropertiesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['weapon-properties'][':index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiWeaponPropertiesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['weapon-properties'][':index'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiWeaponPropertiesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['weapon-properties'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['weapon-properties'][':index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['weapon-properties'][':index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['weapon-properties'][':index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiWeaponPropertiesIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['weapon-properties'][':index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiWeaponPropertiesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiWeaponPropertiesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['weapon-properties'][':index'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiEndpointQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)[':endpoint']['$get']>>,
) {
  return ['api', '/api/:endpoint', toValue(args)] as const
}

export function getApiEndpointQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)[':endpoint']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiEndpointQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api[':endpoint'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiEndpoint<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api)[':endpoint']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)[':endpoint']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api)[':endpoint']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api)[':endpoint']['$get']>>>
            >
          >,
          ReturnType<typeof getApiEndpointQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)[':endpoint']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiEndpointQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiEndpointQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api[':endpoint'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
