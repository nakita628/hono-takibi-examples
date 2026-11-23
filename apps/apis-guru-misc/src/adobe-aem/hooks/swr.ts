import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCqactionsHtmlKey() {
  return ['.cqactions.html'] as const
}

export function getAppsKey() {
  return ['apps'] as const
}

export function getBinKey() {
  return ['bin'] as const
}

export function getCrxKey() {
  return ['crx'] as const
}

export function getEtcKey() {
  return ['etc'] as const
}

export function getLibsKey() {
  return ['libs'] as const
}

export function getSystemKey() {
  return ['system'] as const
}

export function getIntermediatePathKey() {
  return ['{intermediatePath}'] as const
}

export function getPathKey() {
  return ['{path}'] as const
}

export function getPostCqactionsHtmlKey() {
  return ['.cqactions.html', '/.cqactions.html', 'POST'] as const
}

export function usePostCqactionsHtml<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['.cqactions.html']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['.cqactions.html']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCqactionsHtmlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['.cqactions.html']['$post']> },
      ) => parseResponse(client['.cqactions.html'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsSystemConfigComAdobeGraniteAuthSamlSamlAuthenticationHandlerConfigKey() {
  return [
    'apps',
    '/apps/system/config/com.adobe.granite.auth.saml.SamlAuthenticationHandler.config',
    'POST',
  ] as const
}

export function usePostAppsSystemConfigComAdobeGraniteAuthSamlSamlAuthenticationHandlerConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps.system.config)['com.adobe.granite.auth.saml.SamlAuthenticationHandler.config']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apps.system.config)['com.adobe.granite.auth.saml.SamlAuthenticationHandler.config']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAppsSystemConfigComAdobeGraniteAuthSamlSamlAuthenticationHandlerConfigKey()
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
            (typeof client.apps.system.config)['com.adobe.granite.auth.saml.SamlAuthenticationHandler.config']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apps.system.config[
            'com.adobe.granite.auth.saml.SamlAuthenticationHandler.config'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppsSystemConfigComShinesolutionsAemPasswordresetActivatorKey() {
  return [
    'apps',
    '/apps/system/config/com.shinesolutions.aem.passwordreset.Activator',
    'POST',
  ] as const
}

export function usePostAppsSystemConfigComShinesolutionsAemPasswordresetActivator<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps.system.config)['com.shinesolutions.aem.passwordreset.Activator']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apps.system.config)['com.shinesolutions.aem.passwordreset.Activator']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsSystemConfigComShinesolutionsAemPasswordresetActivatorKey()
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
            (typeof client.apps.system.config)['com.shinesolutions.aem.passwordreset.Activator']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apps.system.config['com.shinesolutions.aem.passwordreset.Activator'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppsSystemConfigComShinesolutionsHealthcheckHcImplActiveBundleHealthCheckKey() {
  return [
    'apps',
    '/apps/system/config/com.shinesolutions.healthcheck.hc.impl.ActiveBundleHealthCheck',
    'POST',
  ] as const
}

export function usePostAppsSystemConfigComShinesolutionsHealthcheckHcImplActiveBundleHealthCheck<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps.system.config)['com.shinesolutions.healthcheck.hc.impl.ActiveBundleHealthCheck']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apps.system.config)['com.shinesolutions.healthcheck.hc.impl.ActiveBundleHealthCheck']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostAppsSystemConfigComShinesolutionsHealthcheckHcImplActiveBundleHealthCheckKey()
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
            (typeof client.apps.system.config)['com.shinesolutions.healthcheck.hc.impl.ActiveBundleHealthCheck']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apps.system.config[
            'com.shinesolutions.healthcheck.hc.impl.ActiveBundleHealthCheck'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppsSystemConfigOrgApacheFelixHttpKey() {
  return ['apps', '/apps/system/config/org.apache.felix.http', 'POST'] as const
}

export function usePostAppsSystemConfigOrgApacheFelixHttp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps.system.config)['org.apache.felix.http']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps.system.config)['org.apache.felix.http']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsSystemConfigOrgApacheFelixHttpKey()
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
            (typeof client.apps.system.config)['org.apache.felix.http']['$post']
          >
        },
      ) =>
        parseResponse(client.apps.system.config['org.apache.felix.http'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsSystemConfigOrgApacheHttpProxyconfiguratorConfigKey() {
  return ['apps', '/apps/system/config/org.apache.http.proxyconfigurator.config', 'POST'] as const
}

export function usePostAppsSystemConfigOrgApacheHttpProxyconfiguratorConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps.system.config)['org.apache.http.proxyconfigurator.config']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apps.system.config)['org.apache.http.proxyconfigurator.config']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsSystemConfigOrgApacheHttpProxyconfiguratorConfigKey()
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
            (typeof client.apps.system.config)['org.apache.http.proxyconfigurator.config']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apps.system.config['org.apache.http.proxyconfigurator.config'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppsSystemConfigOrgApacheSlingJcrDavexImplServletsSlingDavExServletKey() {
  return [
    'apps',
    '/apps/system/config/org.apache.sling.jcr.davex.impl.servlets.SlingDavExServlet',
    'POST',
  ] as const
}

export function usePostAppsSystemConfigOrgApacheSlingJcrDavexImplServletsSlingDavExServlet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps.system.config)['org.apache.sling.jcr.davex.impl.servlets.SlingDavExServlet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apps.system.config)['org.apache.sling.jcr.davex.impl.servlets.SlingDavExServlet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAppsSystemConfigOrgApacheSlingJcrDavexImplServletsSlingDavExServletKey()
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
            (typeof client.apps.system.config)['org.apache.sling.jcr.davex.impl.servlets.SlingDavExServlet']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apps.system.config[
            'org.apache.sling.jcr.davex.impl.servlets.SlingDavExServlet'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppsSystemConfigOrgApacheSlingSecurityImplReferrerFilterKey() {
  return [
    'apps',
    '/apps/system/config/org.apache.sling.security.impl.ReferrerFilter',
    'POST',
  ] as const
}

export function usePostAppsSystemConfigOrgApacheSlingSecurityImplReferrerFilter<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps.system.config)['org.apache.sling.security.impl.ReferrerFilter']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apps.system.config)['org.apache.sling.security.impl.ReferrerFilter']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsSystemConfigOrgApacheSlingSecurityImplReferrerFilterKey()
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
            (typeof client.apps.system.config)['org.apache.sling.security.impl.ReferrerFilter']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apps.system.config['org.apache.sling.security.impl.ReferrerFilter'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppsSystemConfigOrgApacheSlingServletsGetDefaultGetServletKey() {
  return [
    'apps',
    '/apps/system/config/org.apache.sling.servlets.get.DefaultGetServlet',
    'POST',
  ] as const
}

export function usePostAppsSystemConfigOrgApacheSlingServletsGetDefaultGetServlet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps.system.config)['org.apache.sling.servlets.get.DefaultGetServlet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apps.system.config)['org.apache.sling.servlets.get.DefaultGetServlet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsSystemConfigOrgApacheSlingServletsGetDefaultGetServletKey()
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
            (typeof client.apps.system.config)['org.apache.sling.servlets.get.DefaultGetServlet']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apps.system.config['org.apache.sling.servlets.get.DefaultGetServlet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppsSystemConfigConfigNodeNameKey() {
  return ['apps', '/apps/system/config/:configNodeName', 'POST'] as const
}

export function usePostAppsSystemConfigConfigNodeName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps.system.config)[':configNodeName']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps.system.config)[':configNodeName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsSystemConfigConfigNodeNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps.system.config)[':configNodeName']['$post']>
        },
      ) => parseResponse(client.apps.system.config[':configNodeName'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBinQuerybuilderJsonKey(
  args: InferRequestType<(typeof client.bin)['querybuilder.json']['$get']>,
) {
  return ['bin', '/bin/querybuilder.json', args] as const
}

export function useGetBinQuerybuilderJson<TError = unknown>(
  args: InferRequestType<(typeof client.bin)['querybuilder.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bin)['querybuilder.json']['$get']>>
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
        ? getGetBinQuerybuilderJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bin)['querybuilder.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bin['querybuilder.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBinQuerybuilderJson<TError = unknown>(
  args: InferRequestType<(typeof client.bin)['querybuilder.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bin)['querybuilder.json']['$get']>>
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
        ? getGetBinQuerybuilderJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bin)['querybuilder.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bin['querybuilder.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBinQuerybuilderJsonKey() {
  return ['bin', '/bin/querybuilder.json', 'POST'] as const
}

export function usePostBinQuerybuilderJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.bin)['querybuilder.json']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.bin)['querybuilder.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBinQuerybuilderJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.bin)['querybuilder.json']['$post']> },
      ) => parseResponse(client.bin['querybuilder.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCrxExplorerUiSetpasswordJspKey() {
  return ['crx', '/crx/explorer/ui/setpassword.jsp', 'POST'] as const
}

export function usePostCrxExplorerUiSetpasswordJsp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crx.explorer.ui)['setpassword.jsp']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crx.explorer.ui)['setpassword.jsp']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrxExplorerUiSetpasswordJspKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.crx.explorer.ui)['setpassword.jsp']['$post']> },
      ) => parseResponse(client.crx.explorer.ui['setpassword.jsp'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCrxPackmgrInstallstatusJspKey() {
  return ['crx', '/crx/packmgr/installstatus.jsp'] as const
}

export function useGetCrxPackmgrInstallstatusJsp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crx.packmgr)['installstatus.jsp']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCrxPackmgrInstallstatusJspKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crx.packmgr)['installstatus.jsp']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.crx.packmgr['installstatus.jsp'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrxPackmgrInstallstatusJsp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crx.packmgr)['installstatus.jsp']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCrxPackmgrInstallstatusJspKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crx.packmgr)['installstatus.jsp']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.crx.packmgr['installstatus.jsp'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCrxPackmgrServiceJspKey() {
  return ['crx', '/crx/packmgr/service.jsp', 'POST'] as const
}

export function usePostCrxPackmgrServiceJsp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crx.packmgr)['service.jsp']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crx.packmgr)['service.jsp']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrxPackmgrServiceJspKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.crx.packmgr)['service.jsp']['$post']> },
      ) => parseResponse(client.crx.packmgr['service.jsp'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCrxPackmgrServiceJsonPathKey() {
  return ['crx', '/crx/packmgr/service/.json/:path', 'POST'] as const
}

export function usePostCrxPackmgrServiceJsonPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crx.packmgr.service)['.json'][':path']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crx.packmgr.service)['.json'][':path']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrxPackmgrServiceJsonPathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.crx.packmgr.service)['.json'][':path']['$post']>
        },
      ) => parseResponse(client.crx.packmgr.service['.json'][':path'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCrxPackmgrServiceScriptHtmlKey() {
  return ['crx', '/crx/packmgr/service/script.html'] as const
}

export function useGetCrxPackmgrServiceScriptHtml<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crx.packmgr.service)['script.html']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCrxPackmgrServiceScriptHtmlKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crx.packmgr.service)['script.html']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.crx.packmgr.service['script.html'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrxPackmgrServiceScriptHtml<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crx.packmgr.service)['script.html']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCrxPackmgrServiceScriptHtmlKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crx.packmgr.service)['script.html']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.crx.packmgr.service['script.html'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCrxPackmgrUpdateJspKey() {
  return ['crx', '/crx/packmgr/update.jsp', 'POST'] as const
}

export function usePostCrxPackmgrUpdateJsp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crx.packmgr)['update.jsp']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crx.packmgr)['update.jsp']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrxPackmgrUpdateJspKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.crx.packmgr)['update.jsp']['$post']> },
      ) => parseResponse(client.crx.packmgr['update.jsp'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCrxServerCrxDefaultJcrRoot1JsonKey() {
  return ['crx', '/crx/server/crx.default/jcr:root/.1.json'] as const
}

export function useGetCrxServerCrxDefaultJcrRoot1Json<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crx.server)['crx.default']['jcr:root']['.1.json']['$get']>
          >
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCrxServerCrxDefaultJcrRoot1JsonKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crx.server)['crx.default']['jcr:root']['.1.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.crx.server['crx.default']['jcr:root']['.1.json'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrxServerCrxDefaultJcrRoot1Json<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crx.server)['crx.default']['jcr:root']['.1.json']['$get']>
          >
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCrxServerCrxDefaultJcrRoot1JsonKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crx.server)['crx.default']['jcr:root']['.1.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.crx.server['crx.default']['jcr:root']['.1.json'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEtcPackagesGroupNameVersionZipKey(
  args: InferRequestType<(typeof client.etc.packages)[':group'][':name-:version.zip']['$get']>,
) {
  return ['etc', '/etc/packages/:group/:name-:version.zip', args] as const
}

export function useGetEtcPackagesGroupNameVersionZip<TError = unknown>(
  args: InferRequestType<(typeof client.etc.packages)[':group'][':name-:version.zip']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.etc.packages)[':group'][':name-:version.zip']['$get']>
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
        ? getGetEtcPackagesGroupNameVersionZipKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.etc.packages)[':group'][':name-:version.zip']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.etc.packages[':group'][':name-:version.zip'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEtcPackagesGroupNameVersionZip<TError = unknown>(
  args: InferRequestType<(typeof client.etc.packages)[':group'][':name-:version.zip']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.etc.packages)[':group'][':name-:version.zip']['$get']>
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
        ? getGetEtcPackagesGroupNameVersionZipKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.etc.packages)[':group'][':name-:version.zip']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.etc.packages[':group'][':name-:version.zip'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEtcPackagesGroupNameVersionZipJcrContentVltDefinitionFilterTidy2JsonKey(
  args: InferRequestType<
    (typeof client.etc.packages)[':group'][':name-:version.zip']['jcr:content']['vlt:definition']['filter.tidy.2.json']['$get']
  >,
) {
  return [
    'etc',
    '/etc/packages/:group/:name-:version.zip/jcr:content/vlt:definition/filter.tidy.2.json',
    args,
  ] as const
}

export function useGetEtcPackagesGroupNameVersionZipJcrContentVltDefinitionFilterTidy2Json<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.etc.packages)[':group'][':name-:version.zip']['jcr:content']['vlt:definition']['filter.tidy.2.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.etc.packages)[':group'][':name-:version.zip']['jcr:content']['vlt:definition']['filter.tidy.2.json']['$get']
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
        ? getGetEtcPackagesGroupNameVersionZipJcrContentVltDefinitionFilterTidy2JsonKey(args)
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
                (typeof client.etc.packages)[':group'][':name-:version.zip']['jcr:content']['vlt:definition']['filter.tidy.2.json']['$get']
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
          client.etc.packages[':group'][':name-:version.zip']['jcr:content']['vlt:definition'][
            'filter.tidy.2.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEtcPackagesGroupNameVersionZipJcrContentVltDefinitionFilterTidy2Json<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.etc.packages)[':group'][':name-:version.zip']['jcr:content']['vlt:definition']['filter.tidy.2.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.etc.packages)[':group'][':name-:version.zip']['jcr:content']['vlt:definition']['filter.tidy.2.json']['$get']
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
        ? getGetEtcPackagesGroupNameVersionZipJcrContentVltDefinitionFilterTidy2JsonKey(args)
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
                (typeof client.etc.packages)[':group'][':name-:version.zip']['jcr:content']['vlt:definition']['filter.tidy.2.json']['$get']
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
          client.etc.packages[':group'][':name-:version.zip']['jcr:content']['vlt:definition'][
            'filter.tidy.2.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEtcReplicationAgentsRunmode1JsonKey(
  args: InferRequestType<(typeof client.etc.replication)['agents.:runmode.-1.json']['$get']>,
) {
  return ['etc', '/etc/replication/agents.:runmode.-1.json', args] as const
}

export function useGetEtcReplicationAgentsRunmode1Json<TError = unknown>(
  args: InferRequestType<(typeof client.etc.replication)['agents.:runmode.-1.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.etc.replication)['agents.:runmode.-1.json']['$get']>>
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
        ? getGetEtcReplicationAgentsRunmode1JsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.etc.replication)['agents.:runmode.-1.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.etc.replication['agents.:runmode.-1.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEtcReplicationAgentsRunmode1Json<TError = unknown>(
  args: InferRequestType<(typeof client.etc.replication)['agents.:runmode.-1.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.etc.replication)['agents.:runmode.-1.json']['$get']>>
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
        ? getGetEtcReplicationAgentsRunmode1JsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.etc.replication)['agents.:runmode.-1.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.etc.replication['agents.:runmode.-1.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEtcReplicationAgentsRunmodeNameKey(
  args: InferRequestType<(typeof client.etc.replication)['agents.:runmode'][':name']['$get']>,
) {
  return ['etc', '/etc/replication/agents.:runmode/:name', args] as const
}

export function useGetEtcReplicationAgentsRunmodeName<TError = unknown>(
  args: InferRequestType<(typeof client.etc.replication)['agents.:runmode'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.etc.replication)['agents.:runmode'][':name']['$get']>>
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
        ? getGetEtcReplicationAgentsRunmodeNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.etc.replication)['agents.:runmode'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.etc.replication['agents.:runmode'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEtcReplicationAgentsRunmodeName<TError = unknown>(
  args: InferRequestType<(typeof client.etc.replication)['agents.:runmode'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.etc.replication)['agents.:runmode'][':name']['$get']>>
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
        ? getGetEtcReplicationAgentsRunmodeNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.etc.replication)['agents.:runmode'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.etc.replication['agents.:runmode'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEtcReplicationAgentsRunmodeNameKey() {
  return ['etc', '/etc/replication/agents.:runmode/:name', 'POST'] as const
}

export function usePostEtcReplicationAgentsRunmodeName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.etc.replication)['agents.:runmode'][':name']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.etc.replication)['agents.:runmode'][':name']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEtcReplicationAgentsRunmodeNameKey()
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
            (typeof client.etc.replication)['agents.:runmode'][':name']['$post']
          >
        },
      ) =>
        parseResponse(client.etc.replication['agents.:runmode'][':name'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteEtcReplicationAgentsRunmodeNameKey() {
  return ['etc', '/etc/replication/agents.:runmode/:name', 'DELETE'] as const
}

export function useDeleteEtcReplicationAgentsRunmodeName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.etc.replication)['agents.:runmode'][':name']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.etc.replication)['agents.:runmode'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEtcReplicationAgentsRunmodeNameKey()
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
            (typeof client.etc.replication)['agents.:runmode'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.etc.replication['agents.:runmode'][':name'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostEtcTruststoreKey() {
  return ['etc', '/etc/truststore', 'POST'] as const
}

export function usePostEtcTruststore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etc.truststore.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.etc.truststore.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEtcTruststoreKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.etc.truststore.$post> }) =>
        parseResponse(client.etc.truststore.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEtcTruststoreTruststoreP12Key() {
  return ['etc', '/etc/truststore/truststore.p12'] as const
}

export function useGetEtcTruststoreTruststoreP12<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.etc.truststore)['truststore.p12']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEtcTruststoreTruststoreP12Key()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.etc.truststore)['truststore.p12']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.etc.truststore['truststore.p12'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEtcTruststoreTruststoreP12<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.etc.truststore)['truststore.p12']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEtcTruststoreTruststoreP12Key()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.etc.truststore)['truststore.p12']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.etc.truststore['truststore.p12'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLibsGraniteCoreContentLoginHtmlKey() {
  return ['libs', '/libs/granite/core/content/login.html'] as const
}

export function useGetLibsGraniteCoreContentLoginHtml<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.libs.granite.core.content)['login.html']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLibsGraniteCoreContentLoginHtmlKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.libs.granite.core.content)['login.html']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.libs.granite.core.content['login.html'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLibsGraniteCoreContentLoginHtml<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.libs.granite.core.content)['login.html']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLibsGraniteCoreContentLoginHtmlKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.libs.granite.core.content)['login.html']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.libs.granite.core.content['login.html'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostLibsGraniteSecurityPostAuthorizablesKey() {
  return ['libs', '/libs/granite/security/post/authorizables', 'POST'] as const
}

export function usePostLibsGraniteSecurityPostAuthorizables<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.libs.granite.security.post.authorizables.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.libs.granite.security.post.authorizables.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLibsGraniteSecurityPostAuthorizablesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.libs.granite.security.post.authorizables.$post> },
      ) => parseResponse(client.libs.granite.security.post.authorizables.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLibsGraniteSecurityPostSslSetupHtmlKey() {
  return ['libs', '/libs/granite/security/post/sslSetup.html', 'POST'] as const
}

export function usePostLibsGraniteSecurityPostSslSetupHtml<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.libs.granite.security.post)['sslSetup.html']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.libs.granite.security.post)['sslSetup.html']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLibsGraniteSecurityPostSslSetupHtmlKey()
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
            (typeof client.libs.granite.security.post)['sslSetup.html']['$post']
          >
        },
      ) =>
        parseResponse(client.libs.granite.security.post['sslSetup.html'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLibsGraniteSecurityPostTruststoreKey() {
  return ['libs', '/libs/granite/security/post/truststore', 'POST'] as const
}

export function usePostLibsGraniteSecurityPostTruststore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.libs.granite.security.post.truststore.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.libs.granite.security.post.truststore.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLibsGraniteSecurityPostTruststoreKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.libs.granite.security.post.truststore.$post> },
      ) => parseResponse(client.libs.granite.security.post.truststore.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLibsGraniteSecurityTruststoreJsonKey() {
  return ['libs', '/libs/granite/security/truststore.json'] as const
}

export function useGetLibsGraniteSecurityTruststoreJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.libs.granite.security)['truststore.json']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLibsGraniteSecurityTruststoreJsonKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.libs.granite.security)['truststore.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.libs.granite.security['truststore.json'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLibsGraniteSecurityTruststoreJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.libs.granite.security)['truststore.json']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLibsGraniteSecurityTruststoreJsonKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.libs.granite.security)['truststore.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.libs.granite.security['truststore.json'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostLibsReplicationTreeactivationHtmlKey() {
  return ['libs', '/libs/replication/treeactivation.html', 'POST'] as const
}

export function usePostLibsReplicationTreeactivationHtml<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.libs.replication)['treeactivation.html']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.libs.replication)['treeactivation.html']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLibsReplicationTreeactivationHtmlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.libs.replication)['treeactivation.html']['$post']>
        },
      ) => parseResponse(client.libs.replication['treeactivation.html'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSystemConsoleBundlesNameKey() {
  return ['system', '/system/console/bundles/:name', 'POST'] as const
}

export function usePostSystemConsoleBundlesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.system.console.bundles)[':name']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.system.console.bundles)[':name']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSystemConsoleBundlesNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.system.console.bundles)[':name']['$post']> },
      ) => parseResponse(client.system.console.bundles[':name'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSystemConsoleBundlesNameJsonKey(
  args: InferRequestType<(typeof client.system.console.bundles)[':name.json']['$get']>,
) {
  return ['system', '/system/console/bundles/:name.json', args] as const
}

export function useGetSystemConsoleBundlesNameJson<TError = unknown>(
  args: InferRequestType<(typeof client.system.console.bundles)[':name.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.system.console.bundles)[':name.json']['$get']>>
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
        ? getGetSystemConsoleBundlesNameJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.system.console.bundles)[':name.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.system.console.bundles[':name.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSystemConsoleBundlesNameJson<TError = unknown>(
  args: InferRequestType<(typeof client.system.console.bundles)[':name.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.system.console.bundles)[':name.json']['$get']>>
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
        ? getGetSystemConsoleBundlesNameJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.system.console.bundles)[':name.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.system.console.bundles[':name.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSystemConsoleConfigMgrKey() {
  return ['system', '/system/console/configMgr'] as const
}

export function useGetSystemConsoleConfigMgr<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.system.console.configMgr.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSystemConsoleConfigMgrKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.system.console.configMgr.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.system.console.configMgr.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSystemConsoleConfigMgr<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.system.console.configMgr.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSystemConsoleConfigMgrKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.system.console.configMgr.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.system.console.configMgr.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSystemConsoleConfigMgrComAdobeGraniteAuthSamlSamlAuthenticationHandlerKey() {
  return [
    'system',
    '/system/console/configMgr/com.adobe.granite.auth.saml.SamlAuthenticationHandler',
    'POST',
  ] as const
}

export function usePostSystemConsoleConfigMgrComAdobeGraniteAuthSamlSamlAuthenticationHandler<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.system.console.configMgr)['com.adobe.granite.auth.saml.SamlAuthenticationHandler']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.system.console.configMgr)['com.adobe.granite.auth.saml.SamlAuthenticationHandler']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostSystemConsoleConfigMgrComAdobeGraniteAuthSamlSamlAuthenticationHandlerKey()
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
            (typeof client.system.console.configMgr)['com.adobe.granite.auth.saml.SamlAuthenticationHandler']['$post']
          >
        },
      ) =>
        parseResponse(
          client.system.console.configMgr[
            'com.adobe.granite.auth.saml.SamlAuthenticationHandler'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSystemConsoleJmxComAdobeGraniteTypeRepositoryOpActionKey() {
  return [
    'system',
    '/system/console/jmx/com.adobe.granite:type=Repository/op/:action',
    'POST',
  ] as const
}

export function usePostSystemConsoleJmxComAdobeGraniteTypeRepositoryOpAction<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.system.console.jmx)['com.adobe.granite:type=Repository']['op'][':action']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.system.console.jmx)['com.adobe.granite:type=Repository']['op'][':action']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSystemConsoleJmxComAdobeGraniteTypeRepositoryOpActionKey()
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
            (typeof client.system.console.jmx)['com.adobe.granite:type=Repository']['op'][':action']['$post']
          >
        },
      ) =>
        parseResponse(
          client.system.console.jmx['com.adobe.granite:type=Repository'].op[':action'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSystemConsoleStatusProductinfoJsonKey() {
  return ['system', '/system/console/status-productinfo.json'] as const
}

export function useGetSystemConsoleStatusProductinfoJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.system.console)['status-productinfo.json']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSystemConsoleStatusProductinfoJsonKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.system.console)['status-productinfo.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.system.console['status-productinfo.json'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSystemConsoleStatusProductinfoJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.system.console)['status-productinfo.json']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSystemConsoleStatusProductinfoJsonKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.system.console)['status-productinfo.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.system.console['status-productinfo.json'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSystemHealthKey(args: InferRequestType<typeof client.system.health.$get>) {
  return ['system', '/system/health', args] as const
}

export function useGetSystemHealth<TError = unknown>(
  args: InferRequestType<typeof client.system.health.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.health.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSystemHealthKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.health.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.system.health.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSystemHealth<TError = unknown>(
  args: InferRequestType<typeof client.system.health.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.health.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSystemHealthKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.health.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.system.health.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIntermediatePathAuthorizableIdKsHtmlKey() {
  return [':intermediatePath', '/:intermediatePath/:authorizableId.ks.html', 'POST'] as const
}

export function usePostIntermediatePathAuthorizableIdKsHtml<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':intermediatePath'][':authorizableId.ks.html']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':intermediatePath'][':authorizableId.ks.html']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIntermediatePathAuthorizableIdKsHtmlKey()
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
            (typeof client)[':intermediatePath'][':authorizableId.ks.html']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':intermediatePath'][':authorizableId.ks.html'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIntermediatePathAuthorizableIdKsJsonKey(
  args: InferRequestType<(typeof client)[':intermediatePath'][':authorizableId.ks.json']['$get']>,
) {
  return [':intermediatePath', '/:intermediatePath/:authorizableId.ks.json', args] as const
}

export function useGetIntermediatePathAuthorizableIdKsJson<TError = unknown>(
  args: InferRequestType<(typeof client)[':intermediatePath'][':authorizableId.ks.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':intermediatePath'][':authorizableId.ks.json']['$get']>
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
        ? getGetIntermediatePathAuthorizableIdKsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':intermediatePath'][':authorizableId.ks.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':intermediatePath'][':authorizableId.ks.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIntermediatePathAuthorizableIdKsJson<TError = unknown>(
  args: InferRequestType<(typeof client)[':intermediatePath'][':authorizableId.ks.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':intermediatePath'][':authorizableId.ks.json']['$get']>
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
        ? getGetIntermediatePathAuthorizableIdKsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':intermediatePath'][':authorizableId.ks.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':intermediatePath'][':authorizableId.ks.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetIntermediatePathAuthorizableIdKeystoreStoreP12Key(
  args: InferRequestType<
    (typeof client)[':intermediatePath'][':authorizableId']['keystore']['store.p12']['$get']
  >,
) {
  return [
    ':intermediatePath',
    '/:intermediatePath/:authorizableId/keystore/store.p12',
    args,
  ] as const
}

export function useGetIntermediatePathAuthorizableIdKeystoreStoreP12<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':intermediatePath'][':authorizableId']['keystore']['store.p12']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':intermediatePath'][':authorizableId']['keystore']['store.p12']['$get']
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
        ? getGetIntermediatePathAuthorizableIdKeystoreStoreP12Key(args)
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
                (typeof client)[':intermediatePath'][':authorizableId']['keystore']['store.p12']['$get']
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
          client[':intermediatePath'][':authorizableId'].keystore['store.p12'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIntermediatePathAuthorizableIdKeystoreStoreP12<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':intermediatePath'][':authorizableId']['keystore']['store.p12']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':intermediatePath'][':authorizableId']['keystore']['store.p12']['$get']
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
        ? getGetIntermediatePathAuthorizableIdKeystoreStoreP12Key(args)
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
                (typeof client)[':intermediatePath'][':authorizableId']['keystore']['store.p12']['$get']
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
          client[':intermediatePath'][':authorizableId'].keystore['store.p12'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostPathIndexKey() {
  return [':path', '/:path/', 'POST'] as const
}

export function usePostPathIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['index']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':path']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPathIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':path']['index']['$post']> },
      ) => parseResponse(client[':path'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPathNameKey(
  args: InferRequestType<(typeof client)[':path'][':name']['$get']>,
) {
  return [':path', '/:path/:name', args] as const
}

export function useGetPathName<TError = unknown>(
  args: InferRequestType<(typeof client)[':path'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':path'][':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPathNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':path'][':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':path'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPathName<TError = unknown>(
  args: InferRequestType<(typeof client)[':path'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':path'][':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPathNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':path'][':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':path'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPathNameKey() {
  return [':path', '/:path/:name', 'POST'] as const
}

export function usePostPathName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':path'][':name']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':path'][':name']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPathNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':path'][':name']['$post']> },
      ) => parseResponse(client[':path'][':name'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePathNameKey() {
  return [':path', '/:path/:name', 'DELETE'] as const
}

export function useDeletePathName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':path'][':name']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':path'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePathNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':path'][':name']['$delete']> },
      ) => parseResponse(client[':path'][':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPathNameRwHtmlKey() {
  return [':path', '/:path/:name.rw.html', 'POST'] as const
}

export function usePostPathNameRwHtml<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':path'][':name.rw.html']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':path'][':name.rw.html']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPathNameRwHtmlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':path'][':name.rw.html']['$post']> },
      ) => parseResponse(client[':path'][':name.rw.html'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
