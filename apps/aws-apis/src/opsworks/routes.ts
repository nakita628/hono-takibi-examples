import { createRoute, z } from '@hono/zod-openapi'

const StringSchema = z.string().openapi('String')

const StringsSchema = z.array(StringSchema).openapi('Strings')

const AssignInstanceRequestSchema = z
  .object({
    InstanceId: StringSchema.and(z.any().openapi({ description: 'The instance ID.' })),
    LayerIds: StringsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The layer ID, which must correspond to a custom layer. You cannot assign a registered instance to a built-in layer.',
        }),
    ),
  })
  .openapi({ required: ['InstanceId', 'LayerIds'], title: 'AssignInstanceRequest' })
  .openapi('AssignInstanceRequest')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const AssignVolumeRequestSchema = z
  .object({
    VolumeId: StringSchema.and(z.any().openapi({ description: 'The volume ID.' })),
    InstanceId: StringSchema.and(
      z.any().openapi({ description: 'The instance ID.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['VolumeId'], title: 'AssignVolumeRequest' })
  .openapi('AssignVolumeRequest')

const AssociateElasticIpRequestSchema = z
  .object({
    ElasticIp: StringSchema.and(z.any().openapi({ description: 'The Elastic IP address.' })),
    InstanceId: StringSchema.and(
      z.any().openapi({ description: 'The instance ID.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ElasticIp'], title: 'AssociateElasticIpRequest' })
  .openapi('AssociateElasticIpRequest')

const AttachElasticLoadBalancerRequestSchema = z
  .object({
    ElasticLoadBalancerName: StringSchema.and(
      z.any().openapi({ description: "The Elastic Load Balancing instance's name." }),
    ),
    LayerId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the layer to which the Elastic Load Balancing instance is to be attached.',
        }),
    ),
  })
  .openapi({
    required: ['ElasticLoadBalancerName', 'LayerId'],
    title: 'AttachElasticLoadBalancerRequest',
  })
  .openapi('AttachElasticLoadBalancerRequest')

const CloneStackResultSchema = z
  .object({
    StackId: StringSchema.and(
      z.any().openapi({ description: 'The cloned stack ID.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the response to a <code>CloneStack</code> request.',
    required: [],
  })
  .openapi('CloneStackResult')

const StackAttributesSchema = z.record(z.string(), StringSchema).openapi('StackAttributes')

const StackConfigurationManagerSchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name. This parameter must be set to "Chef".' }),
    ).exactOptional(),
    Version: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Chef version. This parameter must be set to 12, 11.10, or 11.4 for Linux stacks, and to 12.2 for Windows stacks. The default value for Linux stacks is 11.4.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the configuration manager.', required: [] })
  .openapi('StackConfigurationManager')

const BooleanSchema = z.boolean().openapi('Boolean')

const ChefConfigurationSchema = z
  .object({
    ManageBerkshelf: BooleanSchema.and(
      z.any().openapi({ description: 'Whether to enable Berkshelf.' }),
    ).exactOptional(),
    BerkshelfVersion: StringSchema.and(
      z.any().openapi({ description: 'The Berkshelf version.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the Chef configuration.', required: [] })
  .openapi('ChefConfiguration')

const SourceTypeSchema = z.enum(['git', 'svn', 'archive', 's3']).openapi('SourceType')

const SourceSchema = z
  .object({
    Type: SourceTypeSchema.and(
      z.any().openapi({ description: 'The repository type.' }),
    ).exactOptional(),
    Url: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The source URL. The following is an example of an Amazon S3 source URL: <code>https://s3.amazonaws.com/opsworks-demo-bucket/opsworks_cookbook_demo.tar.gz</code>.',
        }),
    ).exactOptional(),
    Username: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This parameter depends on the repository type.</p> <ul> <li> <p>For Amazon S3 bundles, set <code>Username</code> to the appropriate IAM access key ID.</p> </li> <li> <p>For HTTP bundles, Git repositories, and Subversion repositories, set <code>Username</code> to the user name.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Password: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When included in a request, the parameter depends on the repository type.</p> <ul> <li> <p>For Amazon S3 bundles, set <code>Password</code> to the appropriate IAM secret access key.</p> </li> <li> <p>For HTTP bundles and Subversion repositories, set <code>Password</code> to the password.</p> </li> </ul> <p>For more information on how to safely handle IAM credentials, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-access-keys-best-practices.html">https://docs.aws.amazon.com/general/latest/gr/aws-access-keys-best-practices.html</a>.</p> <p>In responses, AWS OpsWorks Stacks returns <code>*****FILTERED*****</code> instead of the actual value.</p>',
        }),
    ).exactOptional(),
    SshKey: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>In requests, the repository's SSH key.</p> <p>In responses, AWS OpsWorks Stacks returns <code>*****FILTERED*****</code> instead of the actual value.</p>",
        }),
    ).exactOptional(),
    Revision: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The application's version. AWS OpsWorks Stacks enables you to easily deploy new versions of an application. One of the simplest approaches is to have branches or revisions in your repository that represent different versions that can potentially be deployed.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains the information required to retrieve an app or cookbook from a repository. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Creating Apps</a> or <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html">Custom Recipes and Cookbooks</a>.',
    required: [],
  })
  .openapi('Source')

const RootDeviceTypeSchema = z.enum(['ebs', 'instance-store']).openapi('RootDeviceType')

const CloneStackRequestSchema = z
  .object({
    SourceStackId: StringSchema.and(z.any().openapi({ description: 'The source stack ID.' })),
    Name: StringSchema.and(
      z.any().openapi({ description: 'The cloned stack name.' }),
    ).exactOptional(),
    Region: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The cloned stack AWS region, such as "ap-northeast-2". For more information about AWS regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a>.',
        }),
    ).exactOptional(),
    VpcId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the VPC that the cloned stack is to be launched into. It must be in the specified region. All instances are launched into this VPC, and you cannot change the ID later.</p> <ul> <li> <p>If your account supports EC2 Classic, the default value is no VPC.</p> </li> <li> <p>If your account does not support EC2 Classic, the default value is the default VPC for the specified region.</p> </li> </ul> <p>If the VPC ID corresponds to a default VPC and you have specified either the <code>DefaultAvailabilityZone</code> or the <code>DefaultSubnetId</code> parameter only, AWS OpsWorks Stacks infers the value of the other parameter. If you specify neither parameter, AWS OpsWorks Stacks sets these parameters to the first valid Availability Zone for the specified region and the corresponding default VPC subnet ID, respectively. </p> <p>If you specify a nondefault VPC ID, note the following:</p> <ul> <li> <p>It must belong to a VPC in your account that is in the specified region.</p> </li> <li> <p>You must specify a value for <code>DefaultSubnetId</code>.</p> </li> </ul> <p>For more information about how to use AWS OpsWorks Stacks with a VPC, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-vpc.html">Running a Stack in a VPC</a>. For more information about default VPC and EC2 Classic, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-supported-platforms.html">Supported Platforms</a>. </p>',
        }),
    ).exactOptional(),
    Attributes: StackAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of stack attributes and values as key/value pairs to be added to the cloned stack.',
        }),
    ).exactOptional(),
    ServiceRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The stack AWS Identity and Access Management (IAM) role, which allows AWS OpsWorks Stacks to work with AWS resources on your behalf. You must set this parameter to the Amazon Resource Name (ARN) for an existing IAM role. If you create a stack by using the AWS OpsWorks Stacks console, it creates the role for you. You can obtain an existing stack\'s IAM ARN programmatically by calling <a>DescribePermissions</a>. For more information about IAM ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">Using Identifiers</a>.</p> <note> <p>You must set this parameter to a valid service role ARN or the action will fail; there is no default value. You can specify the source stack\'s service role ARN, if you prefer, but you must do so explicitly.</p> </note>',
        }),
    ),
    DefaultInstanceProfileArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an IAM profile that is the default profile for all of the stack\'s EC2 instances. For more information about IAM ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">Using Identifiers</a>.',
        }),
    ).exactOptional(),
    DefaultOs: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The stack\'s operating system, which must be set to one of the following.</p> <ul> <li> <p>A supported Linux operating system: An Amazon Linux version, such as <code>Amazon Linux 2018.03</code>, <code>Amazon Linux 2017.09</code>, <code>Amazon Linux 2017.03</code>, <code>Amazon Linux 2016.09</code>, <code>Amazon Linux 2016.03</code>, <code>Amazon Linux 2015.09</code>, or <code>Amazon Linux 2015.03</code>.</p> </li> <li> <p>A supported Ubuntu operating system, such as <code>Ubuntu 16.04 LTS</code>, <code>Ubuntu 14.04 LTS</code>, or <code>Ubuntu 12.04 LTS</code>.</p> </li> <li> <p> <code>CentOS Linux 7</code> </p> </li> <li> <p> <code>Red Hat Enterprise Linux 7</code> </p> </li> <li> <p> <code>Microsoft Windows Server 2012 R2 Base</code>, <code>Microsoft Windows Server 2012 R2 with SQL Server Express</code>, <code>Microsoft Windows Server 2012 R2 with SQL Server Standard</code>, or <code>Microsoft Windows Server 2012 R2 with SQL Server Web</code>.</p> </li> <li> <p>A custom AMI: <code>Custom</code>. You specify the custom AMI you want to use when you create instances. For more information about how to use custom AMIs with OpsWorks, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-custom-ami.html">Using Custom AMIs</a>.</p> </li> </ul> <p>The default option is the parent stack\'s operating system. For more information about supported operating systems, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-os.html">AWS OpsWorks Stacks Operating Systems</a>.</p> <note> <p>You can specify a different Linux operating system for the cloned stack, but you cannot change from Linux to Windows or Windows to Linux.</p> </note>',
        }),
    ).exactOptional(),
    HostnameTheme: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The stack's host name theme, with spaces are replaced by underscores. The theme is used to generate host names for the stack's instances. By default, <code>HostnameTheme</code> is set to <code>Layer_Dependent</code>, which creates host names by appending integers to the layer's short name. The other themes are:</p> <ul> <li> <p> <code>Baked_Goods</code> </p> </li> <li> <p> <code>Clouds</code> </p> </li> <li> <p> <code>Europe_Cities</code> </p> </li> <li> <p> <code>Fruits</code> </p> </li> <li> <p> <code>Greek_Deities_and_Titans</code> </p> </li> <li> <p> <code>Legendary_creatures_from_Japan</code> </p> </li> <li> <p> <code>Planets_and_Moons</code> </p> </li> <li> <p> <code>Roman_Deities</code> </p> </li> <li> <p> <code>Scottish_Islands</code> </p> </li> <li> <p> <code>US_Cities</code> </p> </li> <li> <p> <code>Wild_Cats</code> </p> </li> </ul> <p>To obtain a generated host name, call <code>GetHostNameSuggestion</code>, which returns a host name based on the current theme.</p>",
        }),
    ).exactOptional(),
    DefaultAvailabilityZone: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The cloned stack\'s default Availability Zone, which must be in the specified region. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a>. If you also specify a value for <code>DefaultSubnetId</code>, the subnet must be in the same zone. For more information, see the <code>VpcId</code> parameter description. ',
        }),
    ).exactOptional(),
    DefaultSubnetId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The stack's default VPC subnet ID. This parameter is required if you specify a value for the <code>VpcId</code> parameter. All instances are launched into this subnet unless you specify otherwise when you create the instance. If you also specify a value for <code>DefaultAvailabilityZone</code>, the subnet must be in that zone. For information on default values and when this parameter is required, see the <code>VpcId</code> parameter description. ",
        }),
    ).exactOptional(),
    CustomJson: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A string that contains user-defined, custom JSON. It is used to override the corresponding default stack configuration JSON values. The string should be in the following format:</p> <p> <code>"{\\"key1\\": \\"value1\\", \\"key2\\": \\"value2\\",...}"</code> </p> <p>For more information about custom JSON, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-json.html">Use Custom JSON to Modify the Stack Configuration Attributes</a> </p>',
        }),
    ).exactOptional(),
    ConfigurationManager: StackConfigurationManagerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration manager. When you clone a stack we recommend that you use the configuration manager to specify the Chef version: 12, 11.10, or 11.4 for Linux stacks, or 12.2 for Windows stacks. The default value for Linux stacks is currently 12.',
        }),
    ).exactOptional(),
    ChefConfiguration: ChefConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>ChefConfiguration</code> object that specifies whether to enable Berkshelf and the Berkshelf version on Chef 11.10 stacks. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-creating.html">Create a New Stack</a>.',
        }),
    ).exactOptional(),
    UseCustomCookbooks: BooleanSchema.and(
      z.any().openapi({ description: 'Whether to use custom cookbooks.' }),
    ).exactOptional(),
    UseOpsworksSecurityGroups: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Whether to associate the AWS OpsWorks Stacks built-in security groups with the stack\'s layers.</p> <p>AWS OpsWorks Stacks provides a standard set of built-in security groups, one for each layer, which are associated with layers by default. With <code>UseOpsworksSecurityGroups</code> you can instead provide your own custom security groups. <code>UseOpsworksSecurityGroups</code> has the following settings: </p> <ul> <li> <p>True - AWS OpsWorks Stacks automatically associates the appropriate built-in security group with each layer (default setting). You can associate additional security groups with a layer after you create it but you cannot delete the built-in security group.</p> </li> <li> <p>False - AWS OpsWorks Stacks does not associate built-in security groups with layers. You must create appropriate Amazon Elastic Compute Cloud (Amazon EC2) security groups and associate a security group with each layer that you create. However, you can still manually associate a built-in security group with a layer on creation; custom security groups are required only for those layers that need custom settings.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-creating.html">Create a New Stack</a>.</p>',
        }),
    ).exactOptional(),
    CustomCookbooksSource: SourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains the information required to retrieve an app or cookbook from a repository. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Adding Apps</a> or <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html">Cookbooks and Recipes</a>.',
        }),
    ).exactOptional(),
    DefaultSshKeyName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A default Amazon EC2 key pair name. The default value is none. If you specify a key pair name, AWS OpsWorks installs the public key on the instance and you can use the private key with an SSH client to log in to the instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-ssh.html"> Using SSH to Communicate with an Instance</a> and <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/security-ssh-access.html"> Managing SSH Access</a>. You can override this setting by specifying a different key pair, or no key pair, when you <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-add.html"> create an instance</a>. ',
        }),
    ).exactOptional(),
    ClonePermissions: BooleanSchema.and(
      z.any().openapi({ description: "Whether to clone the source stack's permissions." }),
    ).exactOptional(),
    CloneAppIds: StringsSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of source stack app IDs to be included in the cloned stack.',
        }),
    ).exactOptional(),
    DefaultRootDeviceType: RootDeviceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The default root device type. This value is used by default for all instances in the cloned stack, but you can override it when you create an instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ComponentsAMIs.html#storage-for-the-root-device">Storage for the Root Device</a>.',
        }),
    ).exactOptional(),
    AgentVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The default AWS OpsWorks Stacks agent version. You have the following options:</p> <ul> <li> <p>Auto-update - Set this parameter to <code>LATEST</code>. AWS OpsWorks Stacks automatically installs new agent versions on the stack's instances as soon as they are available.</p> </li> <li> <p>Fixed version - Set this parameter to your preferred agent version. To update the agent version, you must edit the stack configuration and specify a new version. AWS OpsWorks Stacks then automatically installs that version on the stack's instances.</p> </li> </ul> <p>The default setting is <code>LATEST</code>. To specify an agent version, you must use the complete version number, not the abbreviated number shown on the console. For a list of available agent version numbers, call <a>DescribeAgentVersions</a>. AgentVersion cannot be set to Chef 12.2.</p> <note> <p>You can also specify an agent version when you create or update an instance, which overrides the stack's default setting.</p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['SourceStackId', 'ServiceRoleArn'], title: 'CloneStackRequest' })
  .openapi('CloneStackRequest')

const CreateAppResultSchema = z
  .object({
    AppId: StringSchema.and(z.any().openapi({ description: 'The app ID.' })).exactOptional(),
  })
  .openapi({
    description: 'Contains the response to a <code>CreateApp</code> request.',
    required: [],
  })
  .openapi('CreateAppResult')

const DataSourceSchema = z
  .object({
    Type: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The data source's type, <code>AutoSelectOpsworksMysqlInstance</code>, <code>OpsworksMysqlInstance</code>, <code>RdsDbInstance</code>, or <code>None</code>.",
        }),
    ).exactOptional(),
    Arn: StringSchema.and(
      z.any().openapi({ description: "The data source's ARN." }),
    ).exactOptional(),
    DatabaseName: StringSchema.and(
      z.any().openapi({ description: 'The database name.' }),
    ).exactOptional(),
  })
  .openapi({ description: "Describes an app's data source.", required: [] })
  .openapi('DataSource')

const DataSourcesSchema = z.array(DataSourceSchema).openapi('DataSources')

const AppTypeSchema = z
  .enum(['aws-flow-ruby', 'java', 'rails', 'php', 'nodejs', 'static', 'other'])
  .openapi('AppType')

const SslConfigurationSchema = z
  .object({
    Certificate: StringSchema.and(
      z.any().openapi({ description: "The contents of the certificate's domain.crt file." }),
    ),
    PrivateKey: StringSchema.and(
      z
        .any()
        .openapi({
          description: "The private key; the contents of the certificate's domain.kex file.",
        }),
    ),
    Chain: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional. Can be used to specify an intermediate certificate authority key or client authentication.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Certificate', 'PrivateKey'],
    description: "Describes an app's SSL configuration.",
  })
  .openapi('SslConfiguration')

const AppAttributesSchema = z.record(z.string(), StringSchema).openapi('AppAttributes')

const EnvironmentVariableSchema = z
  .object({
    Key: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "(Required) The environment variable's name, which can consist of up to 64 characters and must be specified. The name can contain upper- and lowercase letters, numbers, and underscores (_), but it must start with a letter or underscore.",
        }),
    ),
    Value: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "(Optional) The environment variable's value, which can be left empty. If you specify a value, it can contain up to 256 characters, which must all be printable.",
        }),
    ),
    Secure: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "(Optional) Whether the variable's value will be returned by the <a>DescribeApps</a> action. To conceal an environment variable's value, set <code>Secure</code> to <code>true</code>. <code>DescribeApps</code> then returns <code>*****FILTERED*****</code> instead of the actual value. The default value for <code>Secure</code> is <code>false</code>. ",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Key', 'Value'], description: "Represents an app's environment variable." })
  .openapi('EnvironmentVariable')

const EnvironmentVariablesSchema = z
  .array(EnvironmentVariableSchema)
  .openapi('EnvironmentVariables')

const CreateAppRequestSchema = z
  .object({
    StackId: StringSchema.and(z.any().openapi({ description: 'The stack ID.' })),
    Shortname: StringSchema.and(
      z.any().openapi({ description: "The app's short name." }),
    ).exactOptional(),
    Name: StringSchema.and(z.any().openapi({ description: 'The app name.' })),
    Description: StringSchema.and(
      z.any().openapi({ description: 'A description of the app.' }),
    ).exactOptional(),
    DataSources: DataSourcesSchema.and(
      z.any().openapi({ description: "The app's data source." }),
    ).exactOptional(),
    Type: AppTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The app type. Each supported type is associated with a particular layer. For example, PHP applications are associated with a PHP layer. AWS OpsWorks Stacks deploys an application to those instances that are members of the corresponding layer. If your app isn't one of the standard types, or you prefer to implement your own Deploy recipes, specify <code>other</code>.",
        }),
    ),
    AppSource: SourceSchema.and(
      z
        .any()
        .openapi({
          description: 'A <code>Source</code> object that specifies the app repository.',
        }),
    ).exactOptional(),
    Domains: StringsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The app virtual host settings, with multiple domains separated by commas. For example: <code>'www.example.com, example.com'</code> ",
        }),
    ).exactOptional(),
    EnableSsl: BooleanSchema.and(
      z.any().openapi({ description: 'Whether to enable SSL for the app.' }),
    ).exactOptional(),
    SslConfiguration: SslConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'An <code>SslConfiguration</code> object with the SSL configuration.',
        }),
    ).exactOptional(),
    Attributes: AppAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more user-defined key/value pairs to be added to the stack attributes.',
        }),
    ).exactOptional(),
    Environment: EnvironmentVariablesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of <code>EnvironmentVariable</code> objects that specify environment variables to be associated with the app. After you deploy the app, these variables are defined on the associated app server instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html#workingapps-creating-environment"> Environment Variables</a>.</p> <p>There is no specific limit on the number of environment variables. However, the size of the associated data structure - which includes the variables\' names, values, and protected flag values - cannot exceed 20 KB. This limit should accommodate most if not all use cases. Exceeding it will cause an exception with the message, "Environment: is too large (maximum is 20KB)."</p> <note> <p>If you have specified one or more environment variables, you cannot modify the stack\'s Chef version.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['StackId', 'Name', 'Type'], title: 'CreateAppRequest' })
  .openapi('CreateAppRequest')

const CreateDeploymentResultSchema = z
  .object({
    DeploymentId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The deployment ID, which can be used with other requests to identify the deployment.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the response to a <code>CreateDeployment</code> request.',
    required: [],
  })
  .openapi('CreateDeploymentResult')

const DeploymentCommandNameSchema = z
  .enum([
    'install_dependencies',
    'update_dependencies',
    'update_custom_cookbooks',
    'execute_recipes',
    'configure',
    'setup',
    'deploy',
    'rollback',
    'start',
    'stop',
    'restart',
    'undeploy',
  ])
  .openapi('DeploymentCommandName')

const DeploymentCommandArgsSchema = z
  .record(z.string(), StringsSchema)
  .openapi('DeploymentCommandArgs')

const DeploymentCommandSchema = z
  .object({
    Name: DeploymentCommandNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the operation. You can specify only one command.</p> <p>For stacks, the following commands are available:</p> <ul> <li> <p> <code>execute_recipes</code>: Execute one or more recipes. To specify the recipes, set an <code>Args</code> parameter named <code>recipes</code> to the list of recipes to be executed. For example, to execute <code>phpapp::appsetup</code>, set <code>Args</code> to <code>{"recipes":["phpapp::appsetup"]}</code>.</p> </li> <li> <p> <code>install_dependencies</code>: Install the stack\'s dependencies.</p> </li> <li> <p> <code>update_custom_cookbooks</code>: Update the stack\'s custom cookbooks.</p> </li> <li> <p> <code>update_dependencies</code>: Update the stack\'s dependencies.</p> </li> </ul> <note> <p>The update_dependencies and install_dependencies commands are supported only for Linux instances. You can run the commands successfully on Windows instances, but they do nothing.</p> </note> <p>For apps, the following commands are available:</p> <ul> <li> <p> <code>deploy</code>: Deploy an app. Ruby on Rails apps have an optional <code>Args</code> parameter named <code>migrate</code>. Set <code>Args</code> to {"migrate":["true"]} to migrate the database. The default setting is {"migrate":["false"]}.</p> </li> <li> <p> <code>rollback</code> Roll the app back to the previous version. When you update an app, AWS OpsWorks Stacks stores the previous version, up to a maximum of five versions. You can use this command to roll an app back as many as four versions.</p> </li> <li> <p> <code>start</code>: Start the app\'s web or application server.</p> </li> <li> <p> <code>stop</code>: Stop the app\'s web or application server.</p> </li> <li> <p> <code>restart</code>: Restart the app\'s web or application server.</p> </li> <li> <p> <code>undeploy</code>: Undeploy the app.</p> </li> </ul>',
        }),
    ),
    Args: DeploymentCommandArgsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The arguments of those commands that take arguments. It should be set to a JSON object with the following format:</p> <p> <code>{"arg_name1" : ["value1", "value2", ...], "arg_name2" : ["value1", "value2", ...], ...}</code> </p> <p>The <code>update_dependencies</code> command takes two arguments:</p> <ul> <li> <p> <code>upgrade_os_to</code> - Specifies the desired Amazon Linux version for instances whose OS you want to upgrade, such as <code>Amazon Linux 2016.09</code>. You must also set the <code>allow_reboot</code> argument to true.</p> </li> <li> <p> <code>allow_reboot</code> - Specifies whether to allow AWS OpsWorks Stacks to reboot the instances if necessary, after installing the updates. This argument can be set to either <code>true</code> or <code>false</code>. The default value is <code>false</code>.</p> </li> </ul> <p>For example, to upgrade an instance to Amazon Linux 2016.09, set <code>Args</code> to the following.</p> <p> <code> { "upgrade_os_to":["Amazon Linux 2016.09"], "allow_reboot":["true"] } </code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], description: 'Used to specify a stack or deployment command.' })
  .openapi('DeploymentCommand')

const CreateDeploymentRequestSchema = z
  .object({
    StackId: StringSchema.and(z.any().openapi({ description: 'The stack ID.' })),
    AppId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The app ID. This parameter is required for app deployments, but not for other deployment commands.',
        }),
    ).exactOptional(),
    InstanceIds: StringsSchema.and(
      z.any().openapi({ description: 'The instance IDs for the deployment targets.' }),
    ).exactOptional(),
    LayerIds: StringsSchema.and(
      z.any().openapi({ description: 'The layer IDs for the deployment targets.' }),
    ).exactOptional(),
    Command: DeploymentCommandSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>DeploymentCommand</code> object that specifies the deployment command and any associated arguments.',
        }),
    ),
    Comment: StringSchema.and(
      z.any().openapi({ description: 'A user-defined comment.' }),
    ).exactOptional(),
    CustomJson: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A string that contains user-defined, custom JSON. You can use this parameter to override some corresponding default stack configuration JSON values. The string should be in the following format:</p> <p> <code>"{\\"key1\\": \\"value1\\", \\"key2\\": \\"value2\\",...}"</code> </p> <p>For more information about custom JSON, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-json.html">Use Custom JSON to Modify the Stack Configuration Attributes</a> and <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook-json-override.html">Overriding Attributes With Custom JSON</a>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['StackId', 'Command'], title: 'CreateDeploymentRequest' })
  .openapi('CreateDeploymentRequest')

const CreateInstanceResultSchema = z
  .object({
    InstanceId: StringSchema.and(
      z.any().openapi({ description: 'The instance ID.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the response to a <code>CreateInstance</code> request.',
    required: [],
  })
  .openapi('CreateInstanceResult')

const AutoScalingTypeSchema = z.enum(['load', 'timer']).openapi('AutoScalingType')

const ArchitectureSchema = z.enum(['x86_64', 'i386']).openapi('Architecture')

const IntegerSchema = z.int().openapi('Integer')

const VolumeTypeSchema = z.enum(['gp2', 'io1', 'standard']).openapi('VolumeType')

const EbsBlockDeviceSchema = z
  .object({
    SnapshotId: StringSchema.and(
      z.any().openapi({ description: 'The snapshot ID.' }),
    ).exactOptional(),
    Iops: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of I/O operations per second (IOPS) that the volume supports. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EbsBlockDevice.html">EbsBlockDevice</a>.',
        }),
    ).exactOptional(),
    VolumeSize: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The volume size, in GiB. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EbsBlockDevice.html">EbsBlockDevice</a>.',
        }),
    ).exactOptional(),
    VolumeType: VolumeTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The volume type. <code>gp2</code> for General Purpose (SSD) volumes, <code>io1</code> for Provisioned IOPS (SSD) volumes, <code>st1</code> for Throughput Optimized hard disk drives (HDD), <code>sc1</code> for Cold HDD,and <code>standard</code> for Magnetic volumes.</p> <p>If you specify the <code>io1</code> volume type, you must also specify a value for the <code>Iops</code> attribute. The maximum ratio of provisioned IOPS to requested volume size (in GiB) is 50:1. AWS uses the default volume size (in GiB) specified in the AMI attributes to set IOPS to 50 x (volume size).</p>',
        }),
    ).exactOptional(),
    DeleteOnTermination: BooleanSchema.and(
      z.any().openapi({ description: 'Whether the volume is deleted on instance termination.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes an Amazon EBS volume. This data type maps directly to the Amazon EC2 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EbsBlockDevice.html">EbsBlockDevice</a> data type.',
    required: [],
  })
  .openapi('EbsBlockDevice')

const BlockDeviceMappingSchema = z
  .object({
    DeviceName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The device name that is exposed to the instance, such as <code>/dev/sdh</code>. For the root device, you can use the explicit device name or you can set this parameter to <code>ROOT_DEVICE</code> and AWS OpsWorks Stacks will provide the correct device name.',
        }),
    ).exactOptional(),
    NoDevice: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Suppresses the specified device included in the AMI's block device mapping.",
        }),
    ).exactOptional(),
    VirtualName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The virtual device name. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_BlockDeviceMapping.html">BlockDeviceMapping</a>.',
        }),
    ).exactOptional(),
    Ebs: EbsBlockDeviceSchema.and(
      z
        .any()
        .openapi({
          description:
            'An <code>EBSBlockDevice</code> that defines how to configure an Amazon EBS volume when the instance is launched.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes a block device mapping. This data type maps directly to the Amazon EC2 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_BlockDeviceMapping.html">BlockDeviceMapping</a> data type. ',
    required: [],
  })
  .openapi('BlockDeviceMapping')

const BlockDeviceMappingsSchema = z.array(BlockDeviceMappingSchema).openapi('BlockDeviceMappings')

const CreateInstanceRequestSchema = z
  .object({
    StackId: StringSchema.and(z.any().openapi({ description: 'The stack ID.' })),
    LayerIds: StringsSchema.and(
      z.any().openapi({ description: "An array that contains the instance's layer IDs." }),
    ),
    InstanceType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The instance type, such as <code>t2.micro</code>. For a list of supported instance types, open the stack in the console, choose <b>Instances</b>, and choose <b>+ Instance</b>. The <b>Size</b> list contains the currently supported types. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance Families and Types</a>. The parameter values that you use to specify the various types are in the <b>API Name</b> column of the <b>Available Instance Types</b> table.',
        }),
    ),
    AutoScalingType: AutoScalingTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'For load-based or time-based instances, the type. Windows stacks can use only time-based instances.',
        }),
    ).exactOptional(),
    Hostname: StringSchema.and(
      z.any().openapi({ description: 'The instance host name.' }),
    ).exactOptional(),
    Os: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The instance\'s operating system, which must be set to one of the following.</p> <ul> <li> <p>A supported Linux operating system: An Amazon Linux version, such as <code>Amazon Linux 2018.03</code>, <code>Amazon Linux 2017.09</code>, <code>Amazon Linux 2017.03</code>, <code>Amazon Linux 2016.09</code>, <code>Amazon Linux 2016.03</code>, <code>Amazon Linux 2015.09</code>, or <code>Amazon Linux 2015.03</code>.</p> </li> <li> <p>A supported Ubuntu operating system, such as <code>Ubuntu 16.04 LTS</code>, <code>Ubuntu 14.04 LTS</code>, or <code>Ubuntu 12.04 LTS</code>.</p> </li> <li> <p> <code>CentOS Linux 7</code> </p> </li> <li> <p> <code>Red Hat Enterprise Linux 7</code> </p> </li> <li> <p>A supported Windows operating system, such as <code>Microsoft Windows Server 2012 R2 Base</code>, <code>Microsoft Windows Server 2012 R2 with SQL Server Express</code>, <code>Microsoft Windows Server 2012 R2 with SQL Server Standard</code>, or <code>Microsoft Windows Server 2012 R2 with SQL Server Web</code>.</p> </li> <li> <p>A custom AMI: <code>Custom</code>.</p> </li> </ul> <p>For more information about the supported operating systems, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-os.html">AWS OpsWorks Stacks Operating Systems</a>.</p> <p>The default option is the current Amazon Linux version. If you set this parameter to <code>Custom</code>, you must use the <a>CreateInstance</a> action\'s AmiId parameter to specify the custom AMI that you want to use. Block device mappings are not supported if the value is <code>Custom</code>. For more information about supported operating systems, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-os.html">Operating Systems</a>For more information about how to use custom AMIs with AWS OpsWorks Stacks, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-custom-ami.html">Using Custom AMIs</a>.</p>',
        }),
    ).exactOptional(),
    AmiId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A custom AMI ID to be used to create the instance. The AMI should be based on one of the supported operating systems. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-custom-ami.html">Using Custom AMIs</a>.</p> <note> <p>If you specify a custom AMI, you must set <code>Os</code> to <code>Custom</code>.</p> </note>',
        }),
    ).exactOptional(),
    SshKeyName: StringSchema.and(
      z.any().openapi({ description: "The instance's Amazon EC2 key-pair name." }),
    ).exactOptional(),
    AvailabilityZone: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The instance Availability Zone. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a>.',
        }),
    ).exactOptional(),
    VirtualizationType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The instance's virtualization type, <code>paravirtual</code> or <code>hvm</code>.",
        }),
    ).exactOptional(),
    SubnetId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The ID of the instance's subnet. If the stack is running in a VPC, you can use this parameter to override the stack's default subnet ID value and direct AWS OpsWorks Stacks to launch the instance in a different subnet.",
        }),
    ).exactOptional(),
    Architecture: ArchitectureSchema.and(
      z
        .any()
        .openapi({
          description:
            'The instance architecture. The default option is <code>x86_64</code>. Instance types do not necessarily support both architectures. For a list of the architectures that are supported by the different instance types, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance Families and Types</a>.',
        }),
    ).exactOptional(),
    RootDeviceType: RootDeviceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The instance root device type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ComponentsAMIs.html#storage-for-the-root-device">Storage for the Root Device</a>.',
        }),
    ).exactOptional(),
    BlockDeviceMappings: BlockDeviceMappingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>BlockDeviceMapping</code> objects that specify the instance\'s block devices. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html">Block Device Mapping</a>. Note that block device mappings are not supported for custom AMIs.',
        }),
    ).exactOptional(),
    InstallUpdatesOnBoot: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Whether to install operating system and package updates when the instance boots. The default value is <code>true</code>. To control when updates are installed, set this value to <code>false</code>. You must then update your instances manually by using <a>CreateDeployment</a> to run the <code>update_dependencies</code> stack command or by manually running <code>yum</code> (Amazon Linux) or <code>apt-get</code> (Ubuntu) on the instances. </p> <note> <p>We strongly recommend using the default value of <code>true</code> to ensure that your instances have the latest security updates.</p> </note>',
        }),
    ).exactOptional(),
    EbsOptimized: BooleanSchema.and(
      z.any().openapi({ description: 'Whether to create an Amazon EBS-optimized instance.' }),
    ).exactOptional(),
    AgentVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The default AWS OpsWorks Stacks agent version. You have the following options:</p> <ul> <li> <p> <code>INHERIT</code> - Use the stack's default agent version setting.</p> </li> <li> <p> <i>version_number</i> - Use the specified agent version. This value overrides the stack's default setting. To update the agent version, edit the instance configuration and specify a new version. AWS OpsWorks Stacks then automatically installs that version on the instance.</p> </li> </ul> <p>The default setting is <code>INHERIT</code>. To specify an agent version, you must use the complete version number, not the abbreviated number shown on the console. For a list of available agent version numbers, call <a>DescribeAgentVersions</a>. AgentVersion cannot be set to Chef 12.2.</p>",
        }),
    ).exactOptional(),
    Tenancy: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The instance\'s tenancy option. The default option is no tenancy, or if the instance is running in a VPC, inherit tenancy settings from the VPC. The following are valid values for this parameter: <code>dedicated</code>, <code>default</code>, or <code>host</code>. Because there are costs associated with changes in tenancy options, we recommend that you research tenancy options before choosing them for your instances. For more information about dedicated hosts, see <a href="http://aws.amazon.com/ec2/dedicated-hosts/">Dedicated Hosts Overview</a> and <a href="http://aws.amazon.com/ec2/dedicated-hosts/">Amazon EC2 Dedicated Hosts</a>. For more information about dedicated instances, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/dedicated-instance.html">Dedicated Instances</a> and <a href="http://aws.amazon.com/ec2/purchasing-options/dedicated-instances/">Amazon EC2 Dedicated Instances</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['StackId', 'LayerIds', 'InstanceType'], title: 'CreateInstanceRequest' })
  .openapi('CreateInstanceRequest')

const CreateLayerResultSchema = z
  .object({
    LayerId: StringSchema.and(z.any().openapi({ description: 'The layer ID.' })).exactOptional(),
  })
  .openapi({
    description: 'Contains the response to a <code>CreateLayer</code> request.',
    required: [],
  })
  .openapi('CreateLayerResult')

const LayerTypeSchema = z
  .enum([
    'aws-flow-ruby',
    'ecs-cluster',
    'java-app',
    'lb',
    'web',
    'php-app',
    'rails-app',
    'nodejs-app',
    'memcached',
    'db-master',
    'monitoring-master',
    'custom',
  ])
  .openapi('LayerType')

const LayerAttributesSchema = z.record(z.string(), StringSchema).openapi('LayerAttributes')

const CloudWatchLogsTimeZoneSchema = z
  .enum(['LOCAL', 'UTC'])
  .openapi({
    description:
      'The preferred time zone for logs streamed to CloudWatch Logs. Valid values are <code>LOCAL</code> and <code>UTC</code>, for Coordinated Universal Time.',
  })
  .openapi('CloudWatchLogsTimeZone')

const CloudWatchLogsInitialPositionSchema = z
  .enum(['start_of_file', 'end_of_file'])
  .openapi({
    description:
      "Specifies where to start to read data (start_of_file or end_of_file). The default is start_of_file. It's only used if there is no state persisted for that log stream.",
  })
  .openapi('CloudWatchLogsInitialPosition')

const CloudWatchLogsEncodingSchema = z
  .enum([
    'ascii',
    'big5',
    'big5hkscs',
    'cp037',
    'cp424',
    'cp437',
    'cp500',
    'cp720',
    'cp737',
    'cp775',
    'cp850',
    'cp852',
    'cp855',
    'cp856',
    'cp857',
    'cp858',
    'cp860',
    'cp861',
    'cp862',
    'cp863',
    'cp864',
    'cp865',
    'cp866',
    'cp869',
    'cp874',
    'cp875',
    'cp932',
    'cp949',
    'cp950',
    'cp1006',
    'cp1026',
    'cp1140',
    'cp1250',
    'cp1251',
    'cp1252',
    'cp1253',
    'cp1254',
    'cp1255',
    'cp1256',
    'cp1257',
    'cp1258',
    'euc_jp',
    'euc_jis_2004',
    'euc_jisx0213',
    'euc_kr',
    'gb2312',
    'gbk',
    'gb18030',
    'hz',
    'iso2022_jp',
    'iso2022_jp_1',
    'iso2022_jp_2',
    'iso2022_jp_2004',
    'iso2022_jp_3',
    'iso2022_jp_ext',
    'iso2022_kr',
    'latin_1',
    'iso8859_2',
    'iso8859_3',
    'iso8859_4',
    'iso8859_5',
    'iso8859_6',
    'iso8859_7',
    'iso8859_8',
    'iso8859_9',
    'iso8859_10',
    'iso8859_13',
    'iso8859_14',
    'iso8859_15',
    'iso8859_16',
    'johab',
    'koi8_r',
    'koi8_u',
    'mac_cyrillic',
    'mac_greek',
    'mac_iceland',
    'mac_latin2',
    'mac_roman',
    'mac_turkish',
    'ptcp154',
    'shift_jis',
    'shift_jis_2004',
    'shift_jisx0213',
    'utf_32',
    'utf_32_be',
    'utf_32_le',
    'utf_16',
    'utf_16_be',
    'utf_16_le',
    'utf_7',
    'utf_8',
    'utf_8_sig',
  ])
  .openapi({
    description:
      'Specifies the encoding of the log file so that the file can be read correctly. The default is <code>utf_8</code>. Encodings supported by Python <code>codecs.decode()</code> can be used here.',
  })
  .openapi('CloudWatchLogsEncoding')

const CloudWatchLogsLogStreamSchema = z
  .object({
    LogGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the destination log group. A log group is created automatically if it doesn't already exist. Log group names can be between 1 and 512 characters long. Allowed characters include a-z, A-Z, 0-9, '_' (underscore), '-' (hyphen), '/' (forward slash), and '.' (period).",
        }),
    ).exactOptional(),
    DatetimeFormat: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies how the time stamp is extracted from logs. For more information, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AgentReference.html">CloudWatch Logs Agent Reference</a>.',
        }),
    ).exactOptional(),
    TimeZone: CloudWatchLogsTimeZoneSchema.and(
      z.any().openapi({ description: 'Specifies the time zone of log event time stamps.' }),
    ).exactOptional(),
    File: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies log files that you want to push to CloudWatch Logs.</p> <p> <code>File</code> can point to a specific file or multiple files (by using wild card characters such as <code>/var/log/system.log*</code>). Only the latest file is pushed to CloudWatch Logs, based on file modification time. We recommend that you use wild card characters to specify a series of files of the same type, such as <code>access_log.2014-06-01-01</code>, <code>access_log.2014-06-01-02</code>, and so on by using a pattern like <code>access_log.*</code>. Don't use a wildcard to match multiple file types, such as <code>access_log_80</code> and <code>access_log_443</code>. To specify multiple, different file types, add another log stream entry to the configuration file, so that each log file type is stored in a different log group.</p> <p>Zipped files are not supported.</p>",
        }),
    ).exactOptional(),
    FileFingerprintLines: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the range of lines for identifying a file. The valid values are one number, or two dash-delimited numbers, such as '1', '2-5'. The default value is '1', meaning the first line is used to calculate the fingerprint. Fingerprint lines are not sent to CloudWatch Logs unless all specified lines are available.",
        }),
    ).exactOptional(),
    MultiLineStartPattern: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the pattern for identifying the start of a log message.',
        }),
    ).exactOptional(),
    InitialPosition: CloudWatchLogsInitialPositionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies where to start to read data (start_of_file or end_of_file). The default is start_of_file. This setting is only used if there is no state persisted for that log stream.',
        }),
    ).exactOptional(),
    Encoding: CloudWatchLogsEncodingSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the encoding of the log file so that the file can be read correctly. The default is <code>utf_8</code>. Encodings supported by Python <code>codecs.decode()</code> can be used here.',
        }),
    ).exactOptional(),
    BufferDuration: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the time duration for the batching of log events. The minimum value is 5000ms and default value is 5000ms.',
        }),
    ).exactOptional(),
    BatchCount: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the max number of log events in a batch, up to 10000. The default value is 1000.',
        }),
    ).exactOptional(),
    BatchSize: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the maximum size of log events in a batch, in bytes, up to 1048576 bytes. The default value is 32768 bytes. This size is calculated as the sum of all event messages in UTF-8, plus 26 bytes for each log event.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the Amazon CloudWatch logs configuration for a layer. For detailed information about members of this data type, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AgentReference.html">CloudWatch Logs Agent Reference</a>.',
    required: [],
  })
  .openapi('CloudWatchLogsLogStream')

const CloudWatchLogsLogStreamsSchema = z
  .array(CloudWatchLogsLogStreamSchema)
  .openapi({ description: 'Describes the Amazon CloudWatch logs configuration for a layer.' })
  .openapi('CloudWatchLogsLogStreams')

const CloudWatchLogsConfigurationSchema = z
  .object({
    Enabled: BooleanSchema.and(
      z.any().openapi({ description: 'Whether CloudWatch Logs is enabled for a layer.' }),
    ).exactOptional(),
    LogStreams: CloudWatchLogsLogStreamsSchema.and(
      z.any().openapi({ description: 'A list of configuration options for CloudWatch Logs.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes the Amazon CloudWatch logs configuration for a layer.',
    required: [],
  })
  .openapi('CloudWatchLogsConfiguration')

const VolumeConfigurationSchema = z
  .object({
    MountPoint: StringSchema.and(
      z.any().openapi({ description: 'The volume mount point. For example "/dev/sdh".' }),
    ),
    RaidLevel: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The volume <a href="http://en.wikipedia.org/wiki/Standard_RAID_levels">RAID level</a>.',
        }),
    ).exactOptional(),
    NumberOfDisks: IntegerSchema.and(
      z.any().openapi({ description: 'The number of disks in the volume.' }),
    ),
    Size: IntegerSchema.and(z.any().openapi({ description: 'The volume size.' })),
    VolumeType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The volume type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html"> Amazon EBS Volume Types</a>.</p> <ul> <li> <p> <code>standard</code> - Magnetic. Magnetic volumes must have a minimum size of 1 GiB and a maximum size of 1024 GiB.</p> </li> <li> <p> <code>io1</code> - Provisioned IOPS (SSD). PIOPS volumes must have a minimum size of 4 GiB and a maximum size of 16384 GiB.</p> </li> <li> <p> <code>gp2</code> - General Purpose (SSD). General purpose volumes must have a minimum size of 1 GiB and a maximum size of 16384 GiB.</p> </li> <li> <p> <code>st1</code> - Throughput Optimized hard disk drive (HDD). Throughput optimized HDD volumes must have a minimum size of 500 GiB and a maximum size of 16384 GiB.</p> </li> <li> <p> <code>sc1</code> - Cold HDD. Cold HDD volumes must have a minimum size of 500 GiB and a maximum size of 16384 GiB.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Iops: IntegerSchema.and(
      z.any().openapi({ description: 'For PIOPS volumes, the IOPS per disk.' }),
    ).exactOptional(),
    Encrypted: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether an Amazon EBS volume is encrypted. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS Encryption</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['MountPoint', 'NumberOfDisks', 'Size'],
    description: 'Describes an Amazon EBS volume configuration.',
  })
  .openapi('VolumeConfiguration')

const VolumeConfigurationsSchema = z
  .array(VolumeConfigurationSchema)
  .openapi('VolumeConfigurations')

const RecipesSchema = z
  .object({
    Setup: StringsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of custom recipe names to be run following a <code>setup</code> event.',
        }),
    ).exactOptional(),
    Configure: StringsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of custom recipe names to be run following a <code>configure</code> event.',
        }),
    ).exactOptional(),
    Deploy: StringsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of custom recipe names to be run following a <code>deploy</code> event.',
        }),
    ).exactOptional(),
    Undeploy: StringsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of custom recipe names to be run following a <code>undeploy</code> event.',
        }),
    ).exactOptional(),
    Shutdown: StringsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of custom recipe names to be run following a <code>shutdown</code> event.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>AWS OpsWorks Stacks supports five lifecycle events: <b>setup</b>, <b>configuration</b>, <b>deploy</b>, <b>undeploy</b>, and <b>shutdown</b>. For each layer, AWS OpsWorks Stacks runs a set of standard recipes for each event. In addition, you can provide custom recipes for any or all layers and events. AWS OpsWorks Stacks runs custom event recipes after the standard recipes. <code>LayerCustomRecipes</code> specifies the custom recipes for a particular layer to be run in response to each of the five events. </p> <p>To specify a recipe, use the cookbook's directory name in the repository followed by two colons and the recipe name, which is the recipe's file name without the .rb extension. For example: phpapp2::dbsetup specifies the dbsetup.rb recipe in the repository's phpapp2 folder.</p>",
    required: [],
  })
  .openapi('Recipes')

const ShutdownEventConfigurationSchema = z
  .object({
    ExecutionTimeout: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time, in seconds, that AWS OpsWorks Stacks will wait after triggering a Shutdown event before shutting down an instance.',
        }),
    ).exactOptional(),
    DelayUntilElbConnectionsDrained: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether to enable Elastic Load Balancing connection draining. For more information, see <a href="https://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/TerminologyandKeyConcepts.html#conn-drain">Connection Draining</a> ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The Shutdown event configuration.', required: [] })
  .openapi('ShutdownEventConfiguration')

const LifecycleEventConfigurationSchema = z
  .object({
    Shutdown: ShutdownEventConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>ShutdownEventConfiguration</code> object that specifies the Shutdown event configuration.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Specifies the lifecycle event configuration', required: [] })
  .openapi('LifecycleEventConfiguration')

const CreateLayerRequestSchema = z
  .object({
    StackId: StringSchema.and(z.any().openapi({ description: 'The layer stack ID.' })),
    Type: LayerTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The layer type. A stack cannot have more than one built-in layer of the same type. It can have any number of custom layers. Built-in layers are not available in Chef 12 stacks.',
        }),
    ),
    Name: StringSchema.and(
      z.any().openapi({ description: 'The layer name, which is used by the console.' }),
    ),
    Shortname: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>For custom layers only, use this parameter to specify the layer's short name, which is used internally by AWS OpsWorks Stacks and by Chef recipes. The short name is also used as the name for the directory where your app files are installed. It can have a maximum of 200 characters, which are limited to the alphanumeric characters, '-', '_', and '.'.</p> <p>The built-in layers' short names are defined by AWS OpsWorks Stacks. For more information, see the <a href=\"https://docs.aws.amazon.com/opsworks/latest/userguide/layers.html\">Layer Reference</a>.</p>",
        }),
    ),
    Attributes: LayerAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>One or more user-defined key-value pairs to be added to the stack attributes.</p> <p>To create a cluster layer, set the <code>EcsClusterArn</code> attribute to the cluster's ARN.</p>",
        }),
    ).exactOptional(),
    CloudWatchLogsConfiguration: CloudWatchLogsConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies CloudWatch Logs configuration options for the layer. For more information, see <a>CloudWatchLogsLogStream</a>.',
        }),
    ).exactOptional(),
    CustomInstanceProfileArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of an IAM profile to be used for the layer\'s EC2 instances. For more information about IAM ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">Using Identifiers</a>.',
        }),
    ).exactOptional(),
    CustomJson: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A JSON-formatted string containing custom stack configuration and deployment attributes to be installed on the layer\'s instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook-json-override.html"> Using Custom JSON</a>. This feature is supported as of version 1.7.42 of the AWS CLI. ',
        }),
    ).exactOptional(),
    CustomSecurityGroupIds: StringsSchema.and(
      z.any().openapi({ description: 'An array containing the layer custom security group IDs.' }),
    ).exactOptional(),
    Packages: StringsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>Package</code> objects that describes the layer packages.',
        }),
    ).exactOptional(),
    VolumeConfigurations: VolumeConfigurationsSchema.and(
      z
        .any()
        .openapi({
          description:
            "A <code>VolumeConfigurations</code> object that describes the layer's Amazon EBS volumes.",
        }),
    ).exactOptional(),
    EnableAutoHealing: BooleanSchema.and(
      z.any().openapi({ description: 'Whether to disable auto healing for the layer.' }),
    ).exactOptional(),
    AutoAssignElasticIps: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether to automatically assign an <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP address</a> to the layer\'s instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-edit.html">How to Edit a Layer</a>.',
        }),
    ).exactOptional(),
    AutoAssignPublicIps: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'For stacks that are running in a VPC, whether to automatically assign a public IP address to the layer\'s instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-edit.html">How to Edit a Layer</a>.',
        }),
    ).exactOptional(),
    CustomRecipes: RecipesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>LayerCustomRecipes</code> object that specifies the layer custom recipes.',
        }),
    ).exactOptional(),
    InstallUpdatesOnBoot: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Whether to install operating system and package updates when the instance boots. The default value is <code>true</code>. To control when updates are installed, set this value to <code>false</code>. You must then update your instances manually by using <a>CreateDeployment</a> to run the <code>update_dependencies</code> stack command or by manually running <code>yum</code> (Amazon Linux) or <code>apt-get</code> (Ubuntu) on the instances. </p> <note> <p>To ensure that your instances have the latest security updates, we strongly recommend using the default value of <code>true</code>.</p> </note>',
        }),
    ).exactOptional(),
    UseEbsOptimizedInstances: BooleanSchema.and(
      z.any().openapi({ description: 'Whether to use Amazon EBS-optimized instances.' }),
    ).exactOptional(),
    LifecycleEventConfiguration: LifecycleEventConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>LifeCycleEventConfiguration</code> object that you can use to configure the Shutdown event to specify an execution timeout and enable or disable Elastic Load Balancer connection draining.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['StackId', 'Type', 'Name', 'Shortname'], title: 'CreateLayerRequest' })
  .openapi('CreateLayerRequest')

const CreateStackResultSchema = z
  .object({
    StackId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The stack ID, which is an opaque string that you use to identify the stack when performing actions such as <code>DescribeStacks</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the response to a <code>CreateStack</code> request.',
    required: [],
  })
  .openapi('CreateStackResult')

const CreateStackRequestSchema = z
  .object({
    Name: StringSchema.and(z.any().openapi({ description: 'The stack name.' })),
    Region: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The stack\'s AWS region, such as <code>ap-south-1</code>. For more information about Amazon regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a>.</p> <note> <p>In the AWS CLI, this API maps to the <code>--stack-region</code> parameter. If the <code>--stack-region</code> parameter and the AWS CLI common parameter <code>--region</code> are set to the same value, the stack uses a <i>regional</i> endpoint. If the <code>--stack-region</code> parameter is not set, but the AWS CLI <code>--region</code> parameter is, this also results in a stack with a <i>regional</i> endpoint. However, if the <code>--region</code> parameter is set to <code>us-east-1</code>, and the <code>--stack-region</code> parameter is set to one of the following, then the stack uses a legacy or <i>classic</i> region: <code>us-west-1, us-west-2, sa-east-1, eu-central-1, eu-west-1, ap-northeast-1, ap-southeast-1, ap-southeast-2</code>. In this case, the actual API endpoint of the stack is in <code>us-east-1</code>. Only the preceding regions are supported as classic regions in the <code>us-east-1</code> API endpoint. Because it is a best practice to choose the regional endpoint that is closest to where you manage AWS, we recommend that you use regional endpoints for new stacks. The AWS CLI common <code>--region</code> parameter always specifies a regional API endpoint; it cannot be used to specify a classic AWS OpsWorks Stacks region.</p> </note>',
        }),
    ),
    VpcId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the VPC that the stack is to be launched into. The VPC must be in the stack\'s region. All instances are launched into this VPC. You cannot change the ID later.</p> <ul> <li> <p>If your account supports EC2-Classic, the default value is <code>no VPC</code>.</p> </li> <li> <p>If your account does not support EC2-Classic, the default value is the default VPC for the specified region.</p> </li> </ul> <p>If the VPC ID corresponds to a default VPC and you have specified either the <code>DefaultAvailabilityZone</code> or the <code>DefaultSubnetId</code> parameter only, AWS OpsWorks Stacks infers the value of the other parameter. If you specify neither parameter, AWS OpsWorks Stacks sets these parameters to the first valid Availability Zone for the specified region and the corresponding default VPC subnet ID, respectively.</p> <p>If you specify a nondefault VPC ID, note the following:</p> <ul> <li> <p>It must belong to a VPC in your account that is in the specified region.</p> </li> <li> <p>You must specify a value for <code>DefaultSubnetId</code>.</p> </li> </ul> <p>For more information about how to use AWS OpsWorks Stacks with a VPC, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-vpc.html">Running a Stack in a VPC</a>. For more information about default VPC and EC2-Classic, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-supported-platforms.html">Supported Platforms</a>. </p>',
        }),
    ).exactOptional(),
    Attributes: StackAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more user-defined key-value pairs to be added to the stack attributes.',
        }),
    ).exactOptional(),
    ServiceRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The stack\'s AWS Identity and Access Management (IAM) role, which allows AWS OpsWorks Stacks to work with AWS resources on your behalf. You must set this parameter to the Amazon Resource Name (ARN) for an existing IAM role. For more information about IAM ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">Using Identifiers</a>.',
        }),
    ),
    DefaultInstanceProfileArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an IAM profile that is the default profile for all of the stack\'s EC2 instances. For more information about IAM ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">Using Identifiers</a>.',
        }),
    ),
    DefaultOs: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The stack\'s default operating system, which is installed on every instance unless you specify a different operating system when you create the instance. You can specify one of the following.</p> <ul> <li> <p>A supported Linux operating system: An Amazon Linux version, such as <code>Amazon Linux 2018.03</code>, <code>Amazon Linux 2017.09</code>, <code>Amazon Linux 2017.03</code>, <code>Amazon Linux 2016.09</code>, <code>Amazon Linux 2016.03</code>, <code>Amazon Linux 2015.09</code>, or <code>Amazon Linux 2015.03</code>.</p> </li> <li> <p>A supported Ubuntu operating system, such as <code>Ubuntu 16.04 LTS</code>, <code>Ubuntu 14.04 LTS</code>, or <code>Ubuntu 12.04 LTS</code>.</p> </li> <li> <p> <code>CentOS Linux 7</code> </p> </li> <li> <p> <code>Red Hat Enterprise Linux 7</code> </p> </li> <li> <p>A supported Windows operating system, such as <code>Microsoft Windows Server 2012 R2 Base</code>, <code>Microsoft Windows Server 2012 R2 with SQL Server Express</code>, <code>Microsoft Windows Server 2012 R2 with SQL Server Standard</code>, or <code>Microsoft Windows Server 2012 R2 with SQL Server Web</code>.</p> </li> <li> <p>A custom AMI: <code>Custom</code>. You specify the custom AMI you want to use when you create instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-custom-ami.html"> Using Custom AMIs</a>.</p> </li> </ul> <p>The default option is the current Amazon Linux version. For more information about supported operating systems, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-os.html">AWS OpsWorks Stacks Operating Systems</a>.</p>',
        }),
    ).exactOptional(),
    HostnameTheme: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The stack's host name theme, with spaces replaced by underscores. The theme is used to generate host names for the stack's instances. By default, <code>HostnameTheme</code> is set to <code>Layer_Dependent</code>, which creates host names by appending integers to the layer's short name. The other themes are:</p> <ul> <li> <p> <code>Baked_Goods</code> </p> </li> <li> <p> <code>Clouds</code> </p> </li> <li> <p> <code>Europe_Cities</code> </p> </li> <li> <p> <code>Fruits</code> </p> </li> <li> <p> <code>Greek_Deities_and_Titans</code> </p> </li> <li> <p> <code>Legendary_creatures_from_Japan</code> </p> </li> <li> <p> <code>Planets_and_Moons</code> </p> </li> <li> <p> <code>Roman_Deities</code> </p> </li> <li> <p> <code>Scottish_Islands</code> </p> </li> <li> <p> <code>US_Cities</code> </p> </li> <li> <p> <code>Wild_Cats</code> </p> </li> </ul> <p>To obtain a generated host name, call <code>GetHostNameSuggestion</code>, which returns a host name based on the current theme.</p>",
        }),
    ).exactOptional(),
    DefaultAvailabilityZone: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The stack\'s default Availability Zone, which must be in the specified region. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a>. If you also specify a value for <code>DefaultSubnetId</code>, the subnet must be in the same zone. For more information, see the <code>VpcId</code> parameter description. ',
        }),
    ).exactOptional(),
    DefaultSubnetId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The stack's default VPC subnet ID. This parameter is required if you specify a value for the <code>VpcId</code> parameter. All instances are launched into this subnet unless you specify otherwise when you create the instance. If you also specify a value for <code>DefaultAvailabilityZone</code>, the subnet must be in that zone. For information on default values and when this parameter is required, see the <code>VpcId</code> parameter description. ",
        }),
    ).exactOptional(),
    CustomJson: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A string that contains user-defined, custom JSON. It can be used to override the corresponding default stack configuration attribute values or to pass data to recipes. The string should be in the following format:</p> <p> <code>"{\\"key1\\": \\"value1\\", \\"key2\\": \\"value2\\",...}"</code> </p> <p>For more information about custom JSON, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-json.html">Use Custom JSON to Modify the Stack Configuration Attributes</a>.</p>',
        }),
    ).exactOptional(),
    ConfigurationManager: StackConfigurationManagerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration manager. When you create a stack we recommend that you use the configuration manager to specify the Chef version: 12, 11.10, or 11.4 for Linux stacks, or 12.2 for Windows stacks. The default value for Linux stacks is currently 12.',
        }),
    ).exactOptional(),
    ChefConfiguration: ChefConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>ChefConfiguration</code> object that specifies whether to enable Berkshelf and the Berkshelf version on Chef 11.10 stacks. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-creating.html">Create a New Stack</a>.',
        }),
    ).exactOptional(),
    UseCustomCookbooks: BooleanSchema.and(
      z.any().openapi({ description: 'Whether the stack uses custom cookbooks.' }),
    ).exactOptional(),
    UseOpsworksSecurityGroups: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Whether to associate the AWS OpsWorks Stacks built-in security groups with the stack\'s layers.</p> <p>AWS OpsWorks Stacks provides a standard set of built-in security groups, one for each layer, which are associated with layers by default. With <code>UseOpsworksSecurityGroups</code> you can instead provide your own custom security groups. <code>UseOpsworksSecurityGroups</code> has the following settings: </p> <ul> <li> <p>True - AWS OpsWorks Stacks automatically associates the appropriate built-in security group with each layer (default setting). You can associate additional security groups with a layer after you create it, but you cannot delete the built-in security group.</p> </li> <li> <p>False - AWS OpsWorks Stacks does not associate built-in security groups with layers. You must create appropriate EC2 security groups and associate a security group with each layer that you create. However, you can still manually associate a built-in security group with a layer on creation; custom security groups are required only for those layers that need custom settings.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-creating.html">Create a New Stack</a>.</p>',
        }),
    ).exactOptional(),
    CustomCookbooksSource: SourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains the information required to retrieve an app or cookbook from a repository. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Adding Apps</a> or <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html">Cookbooks and Recipes</a>.',
        }),
    ).exactOptional(),
    DefaultSshKeyName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A default Amazon EC2 key pair name. The default value is none. If you specify a key pair name, AWS OpsWorks installs the public key on the instance and you can use the private key with an SSH client to log in to the instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-ssh.html"> Using SSH to Communicate with an Instance</a> and <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/security-ssh-access.html"> Managing SSH Access</a>. You can override this setting by specifying a different key pair, or no key pair, when you <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-add.html"> create an instance</a>. ',
        }),
    ).exactOptional(),
    DefaultRootDeviceType: RootDeviceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The default root device type. This value is the default for all instances in the stack, but you can override it when you create an instance. The default option is <code>instance-store</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ComponentsAMIs.html#storage-for-the-root-device">Storage for the Root Device</a>.',
        }),
    ).exactOptional(),
    AgentVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The default AWS OpsWorks Stacks agent version. You have the following options:</p> <ul> <li> <p>Auto-update - Set this parameter to <code>LATEST</code>. AWS OpsWorks Stacks automatically installs new agent versions on the stack's instances as soon as they are available.</p> </li> <li> <p>Fixed version - Set this parameter to your preferred agent version. To update the agent version, you must edit the stack configuration and specify a new version. AWS OpsWorks Stacks then automatically installs that version on the stack's instances.</p> </li> </ul> <p>The default setting is the most recent release of the agent. To specify an agent version, you must use the complete version number, not the abbreviated number shown on the console. For a list of available agent version numbers, call <a>DescribeAgentVersions</a>. AgentVersion cannot be set to Chef 12.2.</p> <note> <p>You can also specify an agent version when you create or update an instance, which overrides the stack's default setting.</p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'Region', 'ServiceRoleArn', 'DefaultInstanceProfileArn'],
    title: 'CreateStackRequest',
  })
  .openapi('CreateStackRequest')

const CreateUserProfileResultSchema = z
  .object({
    IamUserArn: StringSchema.and(
      z.any().openapi({ description: "The user's IAM ARN." }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the response to a <code>CreateUserProfile</code> request.',
    required: [],
  })
  .openapi('CreateUserProfileResult')

const CreateUserProfileRequestSchema = z
  .object({
    IamUserArn: StringSchema.and(
      z
        .any()
        .openapi({ description: "The user's IAM ARN; this can also be a federated user's ARN." }),
    ),
    SshUsername: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The user's SSH user name. The allowable characters are [a-z], [A-Z], [0-9], '-', and '_'. If the specified name includes other punctuation marks, AWS OpsWorks Stacks removes them. For example, <code>my.name</code> will be changed to <code>myname</code>. If you do not specify an SSH user name, AWS OpsWorks Stacks generates one from the IAM user name. ",
        }),
    ).exactOptional(),
    SshPublicKey: StringSchema.and(
      z.any().openapi({ description: "The user's public SSH key." }),
    ).exactOptional(),
    AllowSelfManagement: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether users can specify their own SSH public key through the My Settings page. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/security-settingsshkey.html">Setting an IAM User\'s Public SSH Key</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['IamUserArn'], title: 'CreateUserProfileRequest' })
  .openapi('CreateUserProfileRequest')

const DeleteAppRequestSchema = z
  .object({ AppId: StringSchema.and(z.any().openapi({ description: 'The app ID.' })) })
  .openapi({ required: ['AppId'], title: 'DeleteAppRequest' })
  .openapi('DeleteAppRequest')

const DeleteInstanceRequestSchema = z
  .object({
    InstanceId: StringSchema.and(z.any().openapi({ description: 'The instance ID.' })),
    DeleteElasticIp: BooleanSchema.and(
      z.any().openapi({ description: 'Whether to delete the instance Elastic IP address.' }),
    ).exactOptional(),
    DeleteVolumes: BooleanSchema.and(
      z.any().openapi({ description: "Whether to delete the instance's Amazon EBS volumes." }),
    ).exactOptional(),
  })
  .openapi({ required: ['InstanceId'], title: 'DeleteInstanceRequest' })
  .openapi('DeleteInstanceRequest')

const DeleteLayerRequestSchema = z
  .object({ LayerId: StringSchema.and(z.any().openapi({ description: 'The layer ID.' })) })
  .openapi({ required: ['LayerId'], title: 'DeleteLayerRequest' })
  .openapi('DeleteLayerRequest')

const DeleteStackRequestSchema = z
  .object({ StackId: StringSchema.and(z.any().openapi({ description: 'The stack ID.' })) })
  .openapi({ required: ['StackId'], title: 'DeleteStackRequest' })
  .openapi('DeleteStackRequest')

const DeleteUserProfileRequestSchema = z
  .object({
    IamUserArn: StringSchema.and(
      z
        .any()
        .openapi({ description: "The user's IAM ARN. This can also be a federated user's ARN." }),
    ),
  })
  .openapi({ required: ['IamUserArn'], title: 'DeleteUserProfileRequest' })
  .openapi('DeleteUserProfileRequest')

const DeregisterEcsClusterRequestSchema = z
  .object({
    EcsClusterArn: StringSchema.and(
      z.any().openapi({ description: "The cluster's Amazon Resource Number (ARN)." }),
    ),
  })
  .openapi({ required: ['EcsClusterArn'], title: 'DeregisterEcsClusterRequest' })
  .openapi('DeregisterEcsClusterRequest')

const DeregisterElasticIpRequestSchema = z
  .object({
    ElasticIp: StringSchema.and(z.any().openapi({ description: 'The Elastic IP address.' })),
  })
  .openapi({ required: ['ElasticIp'], title: 'DeregisterElasticIpRequest' })
  .openapi('DeregisterElasticIpRequest')

const DeregisterInstanceRequestSchema = z
  .object({ InstanceId: StringSchema.and(z.any().openapi({ description: 'The instance ID.' })) })
  .openapi({ required: ['InstanceId'], title: 'DeregisterInstanceRequest' })
  .openapi('DeregisterInstanceRequest')

const DeregisterRdsDbInstanceRequestSchema = z
  .object({
    RdsDbInstanceArn: StringSchema.and(
      z.any().openapi({ description: "The Amazon RDS instance's ARN." }),
    ),
  })
  .openapi({ required: ['RdsDbInstanceArn'], title: 'DeregisterRdsDbInstanceRequest' })
  .openapi('DeregisterRdsDbInstanceRequest')

const DeregisterVolumeRequestSchema = z
  .object({
    VolumeId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The AWS OpsWorks Stacks volume ID, which is the GUID that AWS OpsWorks Stacks assigned to the instance when you registered the volume with the stack, not the Amazon EC2 volume ID.',
        }),
    ),
  })
  .openapi({ required: ['VolumeId'], title: 'DeregisterVolumeRequest' })
  .openapi('DeregisterVolumeRequest')

const AgentVersionSchema = z
  .object({
    Version: StringSchema.and(
      z.any().openapi({ description: 'The agent version.' }),
    ).exactOptional(),
    ConfigurationManager: StackConfigurationManagerSchema.and(
      z.any().openapi({ description: 'The configuration manager.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes an agent version.', required: [] })
  .openapi('AgentVersion')

const AgentVersionsSchema = z.array(AgentVersionSchema).openapi('AgentVersions')

const DescribeAgentVersionsResultSchema = z
  .object({
    AgentVersions: AgentVersionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The agent versions for the specified stack or configuration manager. Note that this value is the complete version number, not the abbreviated number used by the console.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the response to a <code>DescribeAgentVersions</code> request.',
    required: [],
  })
  .openapi('DescribeAgentVersionsResult')

const DescribeAgentVersionsRequestSchema = z
  .object({
    StackId: StringSchema.and(z.any().openapi({ description: 'The stack ID.' })).exactOptional(),
    ConfigurationManager: StackConfigurationManagerSchema.and(
      z.any().openapi({ description: 'The configuration manager.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeAgentVersionsRequest', required: [] })
  .openapi('DescribeAgentVersionsRequest')

const AppSchema = z
  .object({
    AppId: StringSchema.and(z.any().openapi({ description: 'The app ID.' })).exactOptional(),
    StackId: StringSchema.and(
      z.any().openapi({ description: 'The app stack ID.' }),
    ).exactOptional(),
    Shortname: StringSchema.and(
      z.any().openapi({ description: "The app's short name." }),
    ).exactOptional(),
    Name: StringSchema.and(z.any().openapi({ description: 'The app name.' })).exactOptional(),
    Description: StringSchema.and(
      z.any().openapi({ description: 'A description of the app.' }),
    ).exactOptional(),
    DataSources: DataSourcesSchema.and(
      z.any().openapi({ description: "The app's data sources." }),
    ).exactOptional(),
    Type: AppTypeSchema.and(z.any().openapi({ description: 'The app type.' })).exactOptional(),
    AppSource: SourceSchema.and(
      z
        .any()
        .openapi({
          description: 'A <code>Source</code> object that describes the app repository.',
        }),
    ).exactOptional(),
    Domains: StringsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The app vhost settings with multiple domains separated by commas. For example: <code>'www.example.com, example.com'</code> ",
        }),
    ).exactOptional(),
    EnableSsl: BooleanSchema.and(
      z.any().openapi({ description: 'Whether to enable SSL for the app.' }),
    ).exactOptional(),
    SslConfiguration: SslConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'An <code>SslConfiguration</code> object with the SSL configuration.',
        }),
    ).exactOptional(),
    Attributes: AppAttributesSchema.and(
      z.any().openapi({ description: 'The stack attributes.' }),
    ).exactOptional(),
    CreatedAt: StringSchema.and(
      z.any().openapi({ description: 'When the app was created.' }),
    ).exactOptional(),
    Environment: EnvironmentVariablesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of <code>EnvironmentVariable</code> objects that specify environment variables to be associated with the app. After you deploy the app, these variables are defined on the associated app server instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html#workingapps-creating-environment"> Environment Variables</a>. </p> <note> <p>There is no specific limit on the number of environment variables. However, the size of the associated data structure - which includes the variable names, values, and protected flag values - cannot exceed 20 KB. This limit should accommodate most if not all use cases, but if you do exceed it, you will cause an exception (API) with an "Environment: is too large (maximum is 20 KB)" message.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A description of the app.', required: [] })
  .openapi('App')

const AppsSchema = z.array(AppSchema).openapi('Apps')

const DescribeAppsResultSchema = z
  .object({
    Apps: AppsSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of <code>App</code> objects that describe the specified apps. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the response to a <code>DescribeApps</code> request.',
    required: [],
  })
  .openapi('DescribeAppsResult')

const DescribeAppsRequestSchema = z
  .object({
    StackId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The app stack ID. If you use this parameter, <code>DescribeApps</code> returns a description of the apps in the specified stack.',
        }),
    ).exactOptional(),
    AppIds: StringsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of app IDs for the apps to be described. If you use this parameter, <code>DescribeApps</code> returns a description of the specified apps. Otherwise, it returns a description of every app.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeAppsRequest', required: [] })
  .openapi('DescribeAppsRequest')

const DateTimeSchema = z.string().openapi('DateTime')

const CommandSchema = z
  .object({
    CommandId: StringSchema.and(
      z.any().openapi({ description: 'The command ID.' }),
    ).exactOptional(),
    InstanceId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the instance where the command was executed.' }),
    ).exactOptional(),
    DeploymentId: StringSchema.and(
      z.any().openapi({ description: 'The command deployment ID.' }),
    ).exactOptional(),
    CreatedAt: DateTimeSchema.and(
      z.any().openapi({ description: 'Date and time when the command was run.' }),
    ).exactOptional(),
    AcknowledgedAt: DateTimeSchema.and(
      z.any().openapi({ description: 'Date and time when the command was acknowledged.' }),
    ).exactOptional(),
    CompletedAt: DateTimeSchema.and(
      z.any().openapi({ description: 'Date when the command completed.' }),
    ).exactOptional(),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The command status:</p> <ul> <li> <p>failed</p> </li> <li> <p>successful</p> </li> <li> <p>skipped</p> </li> <li> <p>pending</p> </li> </ul>',
        }),
    ).exactOptional(),
    ExitCode: IntegerSchema.and(
      z.any().openapi({ description: 'The command exit code.' }),
    ).exactOptional(),
    LogUrl: StringSchema.and(
      z.any().openapi({ description: 'The URL of the command log.' }),
    ).exactOptional(),
    Type: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The command type:</p> <ul> <li> <p> <code>configure</code> </p> </li> <li> <p> <code>deploy</code> </p> </li> <li> <p> <code>execute_recipes</code> </p> </li> <li> <p> <code>install_dependencies</code> </p> </li> <li> <p> <code>restart</code> </p> </li> <li> <p> <code>rollback</code> </p> </li> <li> <p> <code>setup</code> </p> </li> <li> <p> <code>start</code> </p> </li> <li> <p> <code>stop</code> </p> </li> <li> <p> <code>undeploy</code> </p> </li> <li> <p> <code>update_custom_cookbooks</code> </p> </li> <li> <p> <code>update_dependencies</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a command.', required: [] })
  .openapi('Command')

const CommandsSchema = z.array(CommandSchema).openapi('Commands')

const DescribeCommandsResultSchema = z
  .object({
    Commands: CommandsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>Command</code> objects that describe each of the specified commands.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the response to a <code>DescribeCommands</code> request.',
    required: [],
  })
  .openapi('DescribeCommandsResult')

const DescribeCommandsRequestSchema = z
  .object({
    DeploymentId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The deployment ID. If you include this parameter, <code>DescribeCommands</code> returns a description of the commands associated with the specified deployment.',
        }),
    ).exactOptional(),
    InstanceId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The instance ID. If you include this parameter, <code>DescribeCommands</code> returns a description of the commands associated with the specified instance.',
        }),
    ).exactOptional(),
    CommandIds: StringsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of command IDs. If you include this parameter, <code>DescribeCommands</code> returns a description of the specified commands. Otherwise, it returns a description of every command.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeCommandsRequest', required: [] })
  .openapi('DescribeCommandsRequest')

const DeploymentSchema = z
  .object({
    DeploymentId: StringSchema.and(
      z.any().openapi({ description: 'The deployment ID.' }),
    ).exactOptional(),
    StackId: StringSchema.and(z.any().openapi({ description: 'The stack ID.' })).exactOptional(),
    AppId: StringSchema.and(z.any().openapi({ description: 'The app ID.' })).exactOptional(),
    CreatedAt: DateTimeSchema.and(
      z.any().openapi({ description: 'Date when the deployment was created.' }),
    ).exactOptional(),
    CompletedAt: DateTimeSchema.and(
      z.any().openapi({ description: 'Date when the deployment completed.' }),
    ).exactOptional(),
    Duration: IntegerSchema.and(
      z.any().openapi({ description: 'The deployment duration.' }),
    ).exactOptional(),
    IamUserArn: StringSchema.and(
      z.any().openapi({ description: "The user's IAM ARN." }),
    ).exactOptional(),
    Comment: StringSchema.and(
      z.any().openapi({ description: 'A user-defined comment.' }),
    ).exactOptional(),
    Command: DeploymentCommandSchema.and(
      z.any().openapi({ description: 'Used to specify a stack or deployment command.' }),
    ).exactOptional(),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The deployment status:</p> <ul> <li> <p>running</p> </li> <li> <p>successful</p> </li> <li> <p>failed</p> </li> </ul>',
        }),
    ).exactOptional(),
    CustomJson: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A string that contains user-defined custom JSON. It can be used to override the corresponding default stack configuration attribute values for stack or to pass data to recipes. The string should be in the following format:</p> <p> <code>"{\\"key1\\": \\"value1\\", \\"key2\\": \\"value2\\",...}"</code> </p> <p>For more information on custom JSON, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-json.html">Use Custom JSON to Modify the Stack Configuration Attributes</a>.</p>',
        }),
    ).exactOptional(),
    InstanceIds: StringsSchema.and(
      z.any().openapi({ description: 'The IDs of the target instances.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a deployment of a stack or app.', required: [] })
  .openapi('Deployment')

const DeploymentsSchema = z.array(DeploymentSchema).openapi('Deployments')

const DescribeDeploymentsResultSchema = z
  .object({
    Deployments: DeploymentsSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of <code>Deployment</code> objects that describe the deployments.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the response to a <code>DescribeDeployments</code> request.',
    required: [],
  })
  .openapi('DescribeDeploymentsResult')

const DescribeDeploymentsRequestSchema = z
  .object({
    StackId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The stack ID. If you include this parameter, the command returns a description of the commands associated with the specified stack.',
        }),
    ).exactOptional(),
    AppId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The app ID. If you include this parameter, the command returns a description of the commands associated with the specified app.',
        }),
    ).exactOptional(),
    DeploymentIds: StringsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of deployment IDs to be described. If you include this parameter, the command returns a description of the specified deployments. Otherwise, it returns a description of every deployment.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeDeploymentsRequest', required: [] })
  .openapi('DescribeDeploymentsRequest')

const EcsClusterSchema = z
  .object({
    EcsClusterArn: StringSchema.and(
      z.any().openapi({ description: "The cluster's ARN." }),
    ).exactOptional(),
    EcsClusterName: StringSchema.and(
      z.any().openapi({ description: 'The cluster name.' }),
    ).exactOptional(),
    StackId: StringSchema.and(z.any().openapi({ description: 'The stack ID.' })).exactOptional(),
    RegisteredAt: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description: 'The time and date that the cluster was registered with the stack.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a registered Amazon ECS cluster.', required: [] })
  .openapi('EcsCluster')

const EcsClustersSchema = z.array(EcsClusterSchema).openapi('EcsClusters')

const DescribeEcsClustersResultSchema = z
  .object({
    EcsClusters: EcsClustersSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>EcsCluster</code> objects containing the cluster descriptions.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "If a paginated request does not return all of the remaining results, this parameter is set to a token that you can assign to the request object's <code>NextToken</code> parameter to retrieve the next set of results. If the previous paginated request returned all of the remaining results, this parameter is set to <code>null</code>.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the response to a <code>DescribeEcsClusters</code> request.',
    required: [],
  })
  .openapi('DescribeEcsClustersResult')

const DescribeEcsClustersRequestSchema = z
  .object({
    EcsClusterArns: StringsSchema.and(
      z.any().openapi({ description: 'A list of ARNs, one for each cluster to be described.' }),
    ).exactOptional(),
    StackId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A stack ID. <code>DescribeEcsClusters</code> returns a description of the cluster that is registered with the stack.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "If the previous paginated request did not return all of the remaining results, the response object's<code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>DescribeEcsClusters</code> again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.",
        }),
    ).exactOptional(),
    MaxResults: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'To receive a paginated response, use this parameter to specify the maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeEcsClustersRequest', required: [] })
  .openapi('DescribeEcsClustersRequest')

const ElasticIpSchema = z
  .object({
    Ip: StringSchema.and(z.any().openapi({ description: 'The IP address.' })).exactOptional(),
    Name: StringSchema.and(z.any().openapi({ description: 'The name.' })).exactOptional(),
    Domain: StringSchema.and(z.any().openapi({ description: 'The domain.' })).exactOptional(),
    Region: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The AWS region. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a>.',
        }),
    ).exactOptional(),
    InstanceId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the instance that the address is attached to.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes an Elastic IP address.', required: [] })
  .openapi('ElasticIp')

const ElasticIpsSchema = z.array(ElasticIpSchema).openapi('ElasticIps')

const DescribeElasticIpsResultSchema = z
  .object({
    ElasticIps: ElasticIpsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An <code>ElasticIps</code> object that describes the specified Elastic IP addresses.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the response to a <code>DescribeElasticIps</code> request.',
    required: [],
  })
  .openapi('DescribeElasticIpsResult')

const DescribeElasticIpsRequestSchema = z
  .object({
    InstanceId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The instance ID. If you include this parameter, <code>DescribeElasticIps</code> returns a description of the Elastic IP addresses associated with the specified instance.',
        }),
    ).exactOptional(),
    StackId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A stack ID. If you include this parameter, <code>DescribeElasticIps</code> returns a description of the Elastic IP addresses that are registered with the specified stack.',
        }),
    ).exactOptional(),
    Ips: StringsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of Elastic IP addresses to be described. If you include this parameter, <code>DescribeElasticIps</code> returns a description of the specified Elastic IP addresses. Otherwise, it returns a description of every Elastic IP address.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeElasticIpsRequest', required: [] })
  .openapi('DescribeElasticIpsRequest')

const ElasticLoadBalancerSchema = z
  .object({
    ElasticLoadBalancerName: StringSchema.and(
      z.any().openapi({ description: "The Elastic Load Balancing instance's name." }),
    ).exactOptional(),
    Region: StringSchema.and(
      z.any().openapi({ description: "The instance's AWS region." }),
    ).exactOptional(),
    DnsName: StringSchema.and(
      z.any().openapi({ description: "The instance's public DNS name." }),
    ).exactOptional(),
    StackId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the stack that the instance is associated with.' }),
    ).exactOptional(),
    LayerId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the layer that the instance is attached to.' }),
    ).exactOptional(),
    VpcId: StringSchema.and(z.any().openapi({ description: 'The VPC ID.' })).exactOptional(),
    AvailabilityZones: StringsSchema.and(
      z.any().openapi({ description: 'A list of Availability Zones.' }),
    ).exactOptional(),
    SubnetIds: StringsSchema.and(
      z.any().openapi({ description: 'A list of subnet IDs, if the stack is running in a VPC.' }),
    ).exactOptional(),
    Ec2InstanceIds: StringsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the EC2 instances that the Elastic Load Balancing instance is managing traffic for.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes an Elastic Load Balancing instance.', required: [] })
  .openapi('ElasticLoadBalancer')

const ElasticLoadBalancersSchema = z
  .array(ElasticLoadBalancerSchema)
  .openapi('ElasticLoadBalancers')

const DescribeElasticLoadBalancersResultSchema = z
  .object({
    ElasticLoadBalancers: ElasticLoadBalancersSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>ElasticLoadBalancer</code> objects that describe the specified Elastic Load Balancing instances.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the response to a <code>DescribeElasticLoadBalancers</code> request.',
    required: [],
  })
  .openapi('DescribeElasticLoadBalancersResult')

const DescribeElasticLoadBalancersRequestSchema = z
  .object({
    StackId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A stack ID. The action describes the stack's Elastic Load Balancing instances.",
        }),
    ).exactOptional(),
    LayerIds: StringsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of layer IDs. The action describes the Elastic Load Balancing instances for the specified layers.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeElasticLoadBalancersRequest', required: [] })
  .openapi('DescribeElasticLoadBalancersRequest')

const ReportedOsSchema = z
  .object({
    Family: StringSchema.and(
      z.any().openapi({ description: 'The operating system family.' }),
    ).exactOptional(),
    Name: StringSchema.and(
      z.any().openapi({ description: 'The operating system name.' }),
    ).exactOptional(),
    Version: StringSchema.and(
      z.any().openapi({ description: 'The operating system version.' }),
    ).exactOptional(),
  })
  .openapi({ description: "A registered instance's reported operating system.", required: [] })
  .openapi('ReportedOs')

const VirtualizationTypeSchema = z.enum(['paravirtual', 'hvm']).openapi('VirtualizationType')

const InstanceSchema = z
  .object({
    AgentVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The agent version. This parameter is set to <code>INHERIT</code> if the instance inherits the default stack setting or to a a version number for a fixed agent version.',
        }),
    ).exactOptional(),
    AmiId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A custom AMI ID to be used to create the instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-custom-ami.html">Instances</a> ',
        }),
    ).exactOptional(),
    Architecture: ArchitectureSchema.and(
      z.any().openapi({ description: 'The instance architecture: "i386" or "x86_64".' }),
    ).exactOptional(),
    Arn: StringSchema.and(
      z.any().openapi({ description: "The instance's Amazon Resource Number (ARN)." }),
    ).exactOptional(),
    AutoScalingType: AutoScalingTypeSchema.and(
      z.any().openapi({ description: 'For load-based or time-based instances, the type.' }),
    ).exactOptional(),
    AvailabilityZone: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The instance Availability Zone. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a>.',
        }),
    ).exactOptional(),
    BlockDeviceMappings: BlockDeviceMappingsSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of <code>BlockDeviceMapping</code> objects that specify the instance's block device mappings.",
        }),
    ).exactOptional(),
    CreatedAt: DateTimeSchema.and(
      z.any().openapi({ description: 'The time that the instance was created.' }),
    ).exactOptional(),
    EbsOptimized: BooleanSchema.and(
      z.any().openapi({ description: 'Whether this is an Amazon EBS-optimized instance.' }),
    ).exactOptional(),
    Ec2InstanceId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the associated Amazon EC2 instance.' }),
    ).exactOptional(),
    EcsClusterArn: StringSchema.and(
      z.any().openapi({ description: "For container instances, the Amazon ECS cluster's ARN." }),
    ).exactOptional(),
    EcsContainerInstanceArn: StringSchema.and(
      z.any().openapi({ description: "For container instances, the instance's ARN." }),
    ).exactOptional(),
    ElasticIp: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The instance <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP address </a>.',
        }),
    ).exactOptional(),
    Hostname: StringSchema.and(
      z.any().openapi({ description: 'The instance host name.' }),
    ).exactOptional(),
    InfrastructureClass: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'For registered instances, the infrastructure class: <code>ec2</code> or <code>on-premises</code>.',
        }),
    ).exactOptional(),
    InstallUpdatesOnBoot: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Whether to install operating system and package updates when the instance boots. The default value is <code>true</code>. If this value is set to <code>false</code>, you must then update your instances manually by using <a>CreateDeployment</a> to run the <code>update_dependencies</code> stack command or by manually running <code>yum</code> (Amazon Linux) or <code>apt-get</code> (Ubuntu) on the instances. </p> <note> <p>We strongly recommend using the default value of <code>true</code>, to ensure that your instances have the latest security updates.</p> </note>',
        }),
    ).exactOptional(),
    InstanceId: StringSchema.and(
      z.any().openapi({ description: 'The instance ID.' }),
    ).exactOptional(),
    InstanceProfileArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the instance\'s IAM profile. For more information about IAM ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">Using Identifiers</a>.',
        }),
    ).exactOptional(),
    InstanceType: StringSchema.and(
      z.any().openapi({ description: 'The instance type, such as <code>t2.micro</code>.' }),
    ).exactOptional(),
    LastServiceErrorId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the last service error. For more information, call <a>DescribeServiceErrors</a>.',
        }),
    ).exactOptional(),
    LayerIds: StringsSchema.and(
      z.any().openapi({ description: 'An array containing the instance layer IDs.' }),
    ).exactOptional(),
    Os: StringSchema.and(
      z.any().openapi({ description: "The instance's operating system." }),
    ).exactOptional(),
    Platform: StringSchema.and(
      z.any().openapi({ description: "The instance's platform." }),
    ).exactOptional(),
    PrivateDns: StringSchema.and(
      z.any().openapi({ description: "The instance's private DNS name." }),
    ).exactOptional(),
    PrivateIp: StringSchema.and(
      z.any().openapi({ description: "The instance's private IP address." }),
    ).exactOptional(),
    PublicDns: StringSchema.and(
      z.any().openapi({ description: 'The instance public DNS name.' }),
    ).exactOptional(),
    PublicIp: StringSchema.and(
      z.any().openapi({ description: 'The instance public IP address.' }),
    ).exactOptional(),
    RegisteredBy: StringSchema.and(
      z.any().openapi({ description: 'For registered instances, who performed the registration.' }),
    ).exactOptional(),
    ReportedAgentVersion: StringSchema.and(
      z
        .any()
        .openapi({ description: "The instance's reported AWS OpsWorks Stacks agent version." }),
    ).exactOptional(),
    ReportedOs: ReportedOsSchema.and(
      z.any().openapi({ description: 'For registered instances, the reported operating system.' }),
    ).exactOptional(),
    RootDeviceType: RootDeviceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The instance\'s root device type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ComponentsAMIs.html#storage-for-the-root-device">Storage for the Root Device</a>.',
        }),
    ).exactOptional(),
    RootDeviceVolumeId: StringSchema.and(
      z.any().openapi({ description: 'The root device volume ID.' }),
    ).exactOptional(),
    SecurityGroupIds: StringsSchema.and(
      z.any().openapi({ description: 'An array containing the instance security group IDs.' }),
    ).exactOptional(),
    SshHostDsaKeyFingerprint: StringSchema.and(
      z.any().openapi({ description: "The SSH key's Deep Security Agent (DSA) fingerprint." }),
    ).exactOptional(),
    SshHostRsaKeyFingerprint: StringSchema.and(
      z.any().openapi({ description: "The SSH key's RSA fingerprint." }),
    ).exactOptional(),
    SshKeyName: StringSchema.and(
      z.any().openapi({ description: "The instance's Amazon EC2 key-pair name." }),
    ).exactOptional(),
    StackId: StringSchema.and(z.any().openapi({ description: 'The stack ID.' })).exactOptional(),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The instance status:</p> <ul> <li> <p> <code>booting</code> </p> </li> <li> <p> <code>connection_lost</code> </p> </li> <li> <p> <code>online</code> </p> </li> <li> <p> <code>pending</code> </p> </li> <li> <p> <code>rebooting</code> </p> </li> <li> <p> <code>requested</code> </p> </li> <li> <p> <code>running_setup</code> </p> </li> <li> <p> <code>setup_failed</code> </p> </li> <li> <p> <code>shutting_down</code> </p> </li> <li> <p> <code>start_failed</code> </p> </li> <li> <p> <code>stop_failed</code> </p> </li> <li> <p> <code>stopped</code> </p> </li> <li> <p> <code>stopping</code> </p> </li> <li> <p> <code>terminated</code> </p> </li> <li> <p> <code>terminating</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    SubnetId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The instance's subnet ID; applicable only if the stack is running in a VPC.",
        }),
    ).exactOptional(),
    Tenancy: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The instance's tenancy option, such as <code>dedicated</code> or <code>host</code>.",
        }),
    ).exactOptional(),
    VirtualizationType: VirtualizationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The instance's virtualization type: <code>paravirtual</code> or <code>hvm</code>.",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes an instance.', required: [] })
  .openapi('Instance')

const InstancesSchema = z.array(InstanceSchema).openapi('Instances')

const DescribeInstancesResultSchema = z
  .object({
    Instances: InstancesSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of <code>Instance</code> objects that describe the instances.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the response to a <code>DescribeInstances</code> request.',
    required: [],
  })
  .openapi('DescribeInstancesResult')

const DescribeInstancesRequestSchema = z
  .object({
    StackId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A stack ID. If you use this parameter, <code>DescribeInstances</code> returns descriptions of the instances associated with the specified stack.',
        }),
    ).exactOptional(),
    LayerId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A layer ID. If you use this parameter, <code>DescribeInstances</code> returns descriptions of the instances associated with the specified layer.',
        }),
    ).exactOptional(),
    InstanceIds: StringsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of instance IDs to be described. If you use this parameter, <code>DescribeInstances</code> returns a description of the specified instances. Otherwise, it returns a description of every instance.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeInstancesRequest', required: [] })
  .openapi('DescribeInstancesRequest')

const LayerSchema = z
  .object({
    Arn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Number (ARN) of a layer.' }),
    ).exactOptional(),
    StackId: StringSchema.and(
      z.any().openapi({ description: 'The layer stack ID.' }),
    ).exactOptional(),
    LayerId: StringSchema.and(z.any().openapi({ description: 'The layer ID.' })).exactOptional(),
    Type: LayerTypeSchema.and(z.any().openapi({ description: 'The layer type.' })).exactOptional(),
    Name: StringSchema.and(z.any().openapi({ description: 'The layer name.' })).exactOptional(),
    Shortname: StringSchema.and(
      z.any().openapi({ description: 'The layer short name.' }),
    ).exactOptional(),
    Attributes: LayerAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The layer attributes.</p> <p>For the <code>HaproxyStatsPassword</code>, <code>MysqlRootPassword</code>, and <code>GangliaPassword</code> attributes, AWS OpsWorks Stacks returns <code>*****FILTERED*****</code> instead of the actual value</p> <p>For an ECS Cluster layer, AWS OpsWorks Stacks the <code>EcsClusterArn</code> attribute is set to the cluster's ARN.</p>",
        }),
    ).exactOptional(),
    CloudWatchLogsConfiguration: CloudWatchLogsConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon CloudWatch Logs configuration settings for the layer.',
        }),
    ).exactOptional(),
    CustomInstanceProfileArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the default IAM profile to be used for the layer\'s EC2 instances. For more information about IAM ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">Using Identifiers</a>.',
        }),
    ).exactOptional(),
    CustomJson: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A JSON formatted string containing the layer's custom stack configuration and deployment attributes.",
        }),
    ).exactOptional(),
    CustomSecurityGroupIds: StringsSchema.and(
      z
        .any()
        .openapi({ description: "An array containing the layer's custom security group IDs." }),
    ).exactOptional(),
    DefaultSecurityGroupNames: StringsSchema.and(
      z.any().openapi({ description: "An array containing the layer's security group names." }),
    ).exactOptional(),
    Packages: StringsSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of <code>Package</code> objects that describe the layer's packages.",
        }),
    ).exactOptional(),
    VolumeConfigurations: VolumeConfigurationsSchema.and(
      z
        .any()
        .openapi({
          description:
            "A <code>VolumeConfigurations</code> object that describes the layer's Amazon EBS volumes.",
        }),
    ).exactOptional(),
    EnableAutoHealing: BooleanSchema.and(
      z.any().openapi({ description: 'Whether auto healing is disabled for the layer.' }),
    ).exactOptional(),
    AutoAssignElasticIps: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether to automatically assign an <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP address</a> to the layer\'s instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-edit.html">How to Edit a Layer</a>.',
        }),
    ).exactOptional(),
    AutoAssignPublicIps: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'For stacks that are running in a VPC, whether to automatically assign a public IP address to the layer\'s instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-edit.html">How to Edit a Layer</a>.',
        }),
    ).exactOptional(),
    DefaultRecipes: RecipesSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>AWS OpsWorks Stacks supports five lifecycle events: <b>setup</b>, <b>configuration</b>, <b>deploy</b>, <b>undeploy</b>, and <b>shutdown</b>. For each layer, AWS OpsWorks Stacks runs a set of standard recipes for each event. You can also provide custom recipes for any or all layers and events. AWS OpsWorks Stacks runs custom event recipes after the standard recipes. <code>LayerCustomRecipes</code> specifies the custom recipes for a particular layer to be run in response to each of the five events.</p> <p>To specify a recipe, use the cookbook's directory name in the repository followed by two colons and the recipe name, which is the recipe's file name without the <code>.rb</code> extension. For example: <code>phpapp2::dbsetup</code> specifies the <code>dbsetup.rb</code> recipe in the repository's <code>phpapp2</code> folder.</p>",
        }),
    ).exactOptional(),
    CustomRecipes: RecipesSchema.and(
      z
        .any()
        .openapi({
          description:
            "A <code>LayerCustomRecipes</code> object that specifies the layer's custom recipes.",
        }),
    ).exactOptional(),
    CreatedAt: DateTimeSchema.and(
      z.any().openapi({ description: 'Date when the layer was created.' }),
    ).exactOptional(),
    InstallUpdatesOnBoot: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Whether to install operating system and package updates when the instance boots. The default value is <code>true</code>. If this value is set to <code>false</code>, you must then update your instances manually by using <a>CreateDeployment</a> to run the <code>update_dependencies</code> stack command or manually running <code>yum</code> (Amazon Linux) or <code>apt-get</code> (Ubuntu) on the instances. </p> <note> <p>We strongly recommend using the default value of <code>true</code>, to ensure that your instances have the latest security updates.</p> </note>',
        }),
    ).exactOptional(),
    UseEbsOptimizedInstances: BooleanSchema.and(
      z.any().openapi({ description: 'Whether the layer uses Amazon EBS-optimized instances.' }),
    ).exactOptional(),
    LifecycleEventConfiguration: LifecycleEventConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>LifeCycleEventConfiguration</code> object that specifies the Shutdown event configuration.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a layer.', required: [] })
  .openapi('Layer')

const LayersSchema = z.array(LayerSchema).openapi('Layers')

const DescribeLayersResultSchema = z
  .object({
    Layers: LayersSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of <code>Layer</code> objects that describe the layers.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the response to a <code>DescribeLayers</code> request.',
    required: [],
  })
  .openapi('DescribeLayersResult')

const DescribeLayersRequestSchema = z
  .object({
    StackId: StringSchema.and(z.any().openapi({ description: 'The stack ID.' })).exactOptional(),
    LayerIds: StringsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of layer IDs that specify the layers to be described. If you omit this parameter, <code>DescribeLayers</code> returns a description of every layer in the specified stack.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeLayersRequest', required: [] })
  .openapi('DescribeLayersRequest')

const MinuteSchema = z.int().min(1).max(100).openapi('Minute')

const DoubleSchema = z.float64().openapi('Double')

const AutoScalingThresholdsSchema = z
  .object({
    InstanceCount: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of instances to add or remove when the load exceeds a threshold.',
        }),
    ).exactOptional(),
    ThresholdsWaitTime: MinuteSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of time, in minutes, that the load must exceed a threshold before more instances are added or removed.',
        }),
    ).exactOptional(),
    IgnoreMetricsTime: MinuteSchema.and(
      z
        .any()
        .openapi({
          description:
            "The amount of time (in minutes) after a scaling event occurs that AWS OpsWorks Stacks should ignore metrics and suppress additional scaling events. For example, AWS OpsWorks Stacks adds new instances following an upscaling event but the instances won't start reducing the load until they have been booted and configured. There is no point in raising additional scaling events during that operation, which typically takes several minutes. <code>IgnoreMetricsTime</code> allows you to direct AWS OpsWorks Stacks to suppress scaling events long enough to get the new instances online.",
        }),
    ).exactOptional(),
    CpuThreshold: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The CPU utilization threshold, as a percent of the available CPU. A value of -1 disables the threshold.',
        }),
    ).exactOptional(),
    MemoryThreshold: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The memory utilization threshold, as a percent of the available memory. A value of -1 disables the threshold.',
        }),
    ).exactOptional(),
    LoadThreshold: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The load threshold. A value of -1 disables the threshold. For more information about how load is computed, see <a href="http://en.wikipedia.org/wiki/Load_%28computing%29">Load (computing)</a>.',
        }),
    ).exactOptional(),
    Alarms: StringsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Custom Cloudwatch auto scaling alarms, to be used as thresholds. This parameter takes a list of up to five alarm names, which are case sensitive and must be in the same region as the stack.</p> <note> <p>To use custom alarms, you must update your service role to allow <code>cloudwatch:DescribeAlarms</code>. You can either have AWS OpsWorks Stacks update the role for you when you first use this feature or you can edit the role manually. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-servicerole.html">Allowing AWS OpsWorks Stacks to Act on Your Behalf</a>.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes a load-based auto scaling upscaling or downscaling threshold configuration, which specifies when AWS OpsWorks Stacks starts or stops load-based instances.',
    required: [],
  })
  .openapi('AutoScalingThresholds')

const LoadBasedAutoScalingConfigurationSchema = z
  .object({
    LayerId: StringSchema.and(z.any().openapi({ description: 'The layer ID.' })).exactOptional(),
    Enable: BooleanSchema.and(
      z.any().openapi({ description: 'Whether load-based auto scaling is enabled for the layer.' }),
    ).exactOptional(),
    UpScaling: AutoScalingThresholdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An <code>AutoScalingThresholds</code> object that describes the upscaling configuration, which defines how and when AWS OpsWorks Stacks increases the number of instances.',
        }),
    ).exactOptional(),
    DownScaling: AutoScalingThresholdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An <code>AutoScalingThresholds</code> object that describes the downscaling configuration, which defines how and when AWS OpsWorks Stacks reduces the number of instances.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: "Describes a layer's load-based auto scaling configuration.",
    required: [],
  })
  .openapi('LoadBasedAutoScalingConfiguration')

const LoadBasedAutoScalingConfigurationsSchema = z
  .array(LoadBasedAutoScalingConfigurationSchema)
  .openapi('LoadBasedAutoScalingConfigurations')

const DescribeLoadBasedAutoScalingResultSchema = z
  .object({
    LoadBasedAutoScalingConfigurations: LoadBasedAutoScalingConfigurationsSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of <code>LoadBasedAutoScalingConfiguration</code> objects that describe each layer's configuration.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the response to a <code>DescribeLoadBasedAutoScaling</code> request.',
    required: [],
  })
  .openapi('DescribeLoadBasedAutoScalingResult')

const DescribeLoadBasedAutoScalingRequestSchema = z
  .object({
    LayerIds: StringsSchema.and(z.any().openapi({ description: 'An array of layer IDs.' })),
  })
  .openapi({ required: ['LayerIds'], title: 'DescribeLoadBasedAutoScalingRequest' })
  .openapi('DescribeLoadBasedAutoScalingRequest')

const SelfUserProfileSchema = z
  .object({
    IamUserArn: StringSchema.and(
      z.any().openapi({ description: "The user's IAM ARN." }),
    ).exactOptional(),
    Name: StringSchema.and(z.any().openapi({ description: "The user's name." })).exactOptional(),
    SshUsername: StringSchema.and(
      z.any().openapi({ description: "The user's SSH user name." }),
    ).exactOptional(),
    SshPublicKey: StringSchema.and(
      z.any().openapi({ description: "The user's SSH public key." }),
    ).exactOptional(),
  })
  .openapi({ description: "Describes a user's SSH information.", required: [] })
  .openapi('SelfUserProfile')

const DescribeMyUserProfileResultSchema = z
  .object({
    UserProfile: SelfUserProfileSchema.and(
      z
        .any()
        .openapi({
          description:
            "A <code>UserProfile</code> object that describes the user's SSH information.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the response to a <code>DescribeMyUserProfile</code> request.',
    required: [],
  })
  .openapi('DescribeMyUserProfileResult')

const OperatingSystemConfigurationManagerSchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of the configuration manager, which is Chef.' }),
    ).exactOptional(),
    Version: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The versions of the configuration manager that are supported by an operating system.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A block that contains information about the configuration manager (Chef) and the versions of the configuration manager that are supported for an operating system.',
    required: [],
  })
  .openapi('OperatingSystemConfigurationManager')

const OperatingSystemConfigurationManagersSchema = z
  .array(OperatingSystemConfigurationManagerSchema)
  .openapi('OperatingSystemConfigurationManagers')

const OperatingSystemSchema = z
  .object({
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the operating system, such as <code>Amazon Linux 2018.03</code>.',
        }),
    ).exactOptional(),
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of a supported operating system, such as <code>Amazon Linux 2018.03</code>.',
        }),
    ).exactOptional(),
    Type: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of a supported operating system, either <code>Linux</code> or <code>Windows</code>.',
        }),
    ).exactOptional(),
    ConfigurationManagers: OperatingSystemConfigurationManagersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Supported configuration manager name and versions for an AWS OpsWorks Stacks operating system.',
        }),
    ).exactOptional(),
    ReportedName: StringSchema.and(
      z.any().openapi({ description: 'A short name for the operating system manufacturer.' }),
    ).exactOptional(),
    ReportedVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the operating system, including the release and edition, if applicable.',
        }),
    ).exactOptional(),
    Supported: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates that an operating system is not supported for new instances.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes supported operating systems in AWS OpsWorks Stacks.',
    required: [],
  })
  .openapi('OperatingSystem')

const OperatingSystemsSchema = z.array(OperatingSystemSchema).openapi('OperatingSystems')

const DescribeOperatingSystemsResponseSchema = z
  .object({
    OperatingSystems: OperatingSystemsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains information in response to a <code>DescribeOperatingSystems</code> request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The response to a <code>DescribeOperatingSystems</code> request.',
    required: [],
  })
  .openapi('DescribeOperatingSystemsResponse')

const PermissionSchema = z
  .object({
    StackId: StringSchema.and(z.any().openapi({ description: 'A stack ID.' })).exactOptional(),
    IamUserArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) for an AWS Identity and Access Management (IAM) role. For more information about IAM ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">Using Identifiers</a>.',
        }),
    ).exactOptional(),
    AllowSsh: BooleanSchema.and(
      z.any().openapi({ description: 'Whether the user can use SSH.' }),
    ).exactOptional(),
    AllowSudo: BooleanSchema.and(
      z.any().openapi({ description: 'Whether the user can use <b>sudo</b>.' }),
    ).exactOptional(),
    Level: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The user\'s permission level, which must be the following:</p> <ul> <li> <p> <code>deny</code> </p> </li> <li> <p> <code>show</code> </p> </li> <li> <p> <code>deploy</code> </p> </li> <li> <p> <code>manage</code> </p> </li> <li> <p> <code>iam_only</code> </p> </li> </ul> <p>For more information on the permissions associated with these levels, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes stack or user permissions.', required: [] })
  .openapi('Permission')

const PermissionsSchema = z.array(PermissionSchema).openapi('Permissions')

const DescribePermissionsResultSchema = z
  .object({
    Permissions: PermissionsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>An array of <code>Permission</code> objects that describe the stack permissions.</p> <ul> <li> <p>If the request object contains only a stack ID, the array contains a <code>Permission</code> object with permissions for each of the stack IAM ARNs.</p> </li> <li> <p>If the request object contains only an IAM ARN, the array contains a <code>Permission</code> object with permissions for each of the user's stack IDs.</p> </li> <li> <p>If the request contains a stack ID and an IAM ARN, the array contains a single <code>Permission</code> object with permissions for the specified stack and IAM ARN.</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the response to a <code>DescribePermissions</code> request.',
    required: [],
  })
  .openapi('DescribePermissionsResult')

const DescribePermissionsRequestSchema = z
  .object({
    IamUserArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user\'s IAM ARN. This can also be a federated user\'s ARN. For more information about IAM ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">Using Identifiers</a>.',
        }),
    ).exactOptional(),
    StackId: StringSchema.and(z.any().openapi({ description: 'The stack ID.' })).exactOptional(),
  })
  .openapi({ title: 'DescribePermissionsRequest', required: [] })
  .openapi('DescribePermissionsRequest')

const RaidArraySchema = z
  .object({
    RaidArrayId: StringSchema.and(
      z.any().openapi({ description: 'The array ID.' }),
    ).exactOptional(),
    InstanceId: StringSchema.and(
      z.any().openapi({ description: 'The instance ID.' }),
    ).exactOptional(),
    Name: StringSchema.and(z.any().openapi({ description: 'The array name.' })).exactOptional(),
    RaidLevel: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="http://en.wikipedia.org/wiki/Standard_RAID_levels">RAID level</a>.',
        }),
    ).exactOptional(),
    NumberOfDisks: IntegerSchema.and(
      z.any().openapi({ description: 'The number of disks in the array.' }),
    ).exactOptional(),
    Size: IntegerSchema.and(z.any().openapi({ description: "The array's size." })).exactOptional(),
    Device: StringSchema.and(
      z.any().openapi({ description: "The array's Linux device. For example /dev/mdadm0." }),
    ).exactOptional(),
    MountPoint: StringSchema.and(
      z.any().openapi({ description: "The array's mount point." }),
    ).exactOptional(),
    AvailabilityZone: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The array\'s Availability Zone. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a>.',
        }),
    ).exactOptional(),
    CreatedAt: DateTimeSchema.and(
      z.any().openapi({ description: 'When the RAID array was created.' }),
    ).exactOptional(),
    StackId: StringSchema.and(z.any().openapi({ description: 'The stack ID.' })).exactOptional(),
    VolumeType: StringSchema.and(
      z.any().openapi({ description: 'The volume type, standard or PIOPS.' }),
    ).exactOptional(),
    Iops: IntegerSchema.and(
      z.any().openapi({ description: 'For PIOPS volumes, the IOPS per disk.' }),
    ).exactOptional(),
  })
  .openapi({ description: "Describes an instance's RAID array.", required: [] })
  .openapi('RaidArray')

const RaidArraysSchema = z.array(RaidArraySchema).openapi('RaidArrays')

const DescribeRaidArraysResultSchema = z
  .object({
    RaidArrays: RaidArraysSchema.and(
      z
        .any()
        .openapi({
          description: 'A <code>RaidArrays</code> object that describes the specified RAID arrays.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the response to a <code>DescribeRaidArrays</code> request.',
    required: [],
  })
  .openapi('DescribeRaidArraysResult')

const DescribeRaidArraysRequestSchema = z
  .object({
    InstanceId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The instance ID. If you use this parameter, <code>DescribeRaidArrays</code> returns descriptions of the RAID arrays associated with the specified instance. ',
        }),
    ).exactOptional(),
    StackId: StringSchema.and(z.any().openapi({ description: 'The stack ID.' })).exactOptional(),
    RaidArrayIds: StringsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of RAID array IDs. If you use this parameter, <code>DescribeRaidArrays</code> returns descriptions of the specified arrays. Otherwise, it returns a description of every array.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeRaidArraysRequest', required: [] })
  .openapi('DescribeRaidArraysRequest')

const RdsDbInstanceSchema = z
  .object({
    RdsDbInstanceArn: StringSchema.and(
      z.any().openapi({ description: "The instance's ARN." }),
    ).exactOptional(),
    DbInstanceIdentifier: StringSchema.and(
      z.any().openapi({ description: 'The DB instance identifier.' }),
    ).exactOptional(),
    DbUser: StringSchema.and(
      z.any().openapi({ description: 'The master user name.' }),
    ).exactOptional(),
    DbPassword: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'AWS OpsWorks Stacks returns <code>*****FILTERED*****</code> instead of the actual value.',
        }),
    ).exactOptional(),
    Region: StringSchema.and(
      z.any().openapi({ description: "The instance's AWS region." }),
    ).exactOptional(),
    Address: StringSchema.and(
      z.any().openapi({ description: "The instance's address." }),
    ).exactOptional(),
    Engine: StringSchema.and(
      z.any().openapi({ description: "The instance's database engine." }),
    ).exactOptional(),
    StackId: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the stack with which the instance is registered.' }),
    ).exactOptional(),
    MissingOnRds: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set to <code>true</code> if AWS OpsWorks Stacks is unable to discover the Amazon RDS instance. AWS OpsWorks Stacks attempts to discover the instance only once. If this value is set to <code>true</code>, you must deregister the instance, and then register it again.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes an Amazon RDS instance.', required: [] })
  .openapi('RdsDbInstance')

const RdsDbInstancesSchema = z.array(RdsDbInstanceSchema).openapi('RdsDbInstances')

const DescribeRdsDbInstancesResultSchema = z
  .object({
    RdsDbInstances: RdsDbInstancesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An a array of <code>RdsDbInstance</code> objects that describe the instances.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the response to a <code>DescribeRdsDbInstances</code> request.',
    required: [],
  })
  .openapi('DescribeRdsDbInstancesResult')

const DescribeRdsDbInstancesRequestSchema = z
  .object({
    StackId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the stack with which the instances are registered. The operation returns descriptions of all registered Amazon RDS instances.',
        }),
    ),
    RdsDbInstanceArns: StringsSchema.and(
      z
        .any()
        .openapi({ description: 'An array containing the ARNs of the instances to be described.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['StackId'], title: 'DescribeRdsDbInstancesRequest' })
  .openapi('DescribeRdsDbInstancesRequest')

const ServiceErrorSchema = z
  .object({
    ServiceErrorId: StringSchema.and(
      z.any().openapi({ description: 'The error ID.' }),
    ).exactOptional(),
    StackId: StringSchema.and(z.any().openapi({ description: 'The stack ID.' })).exactOptional(),
    InstanceId: StringSchema.and(
      z.any().openapi({ description: 'The instance ID.' }),
    ).exactOptional(),
    Type: StringSchema.and(z.any().openapi({ description: 'The error type.' })).exactOptional(),
    Message: StringSchema.and(
      z.any().openapi({ description: 'A message that describes the error.' }),
    ).exactOptional(),
    CreatedAt: DateTimeSchema.and(
      z.any().openapi({ description: 'When the error occurred.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes an AWS OpsWorks Stacks service error.', required: [] })
  .openapi('ServiceError')

const ServiceErrorsSchema = z.array(ServiceErrorSchema).openapi('ServiceErrors')

const DescribeServiceErrorsResultSchema = z
  .object({
    ServiceErrors: ServiceErrorsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>ServiceError</code> objects that describe the specified service errors.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the response to a <code>DescribeServiceErrors</code> request.',
    required: [],
  })
  .openapi('DescribeServiceErrorsResult')

const DescribeServiceErrorsRequestSchema = z
  .object({
    StackId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The stack ID. If you use this parameter, <code>DescribeServiceErrors</code> returns descriptions of the errors associated with the specified stack.',
        }),
    ).exactOptional(),
    InstanceId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The instance ID. If you use this parameter, <code>DescribeServiceErrors</code> returns descriptions of the errors associated with the specified instance.',
        }),
    ).exactOptional(),
    ServiceErrorIds: StringsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of service error IDs. If you use this parameter, <code>DescribeServiceErrors</code> returns descriptions of the specified errors. Otherwise, it returns a description of every error.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeServiceErrorsRequest', required: [] })
  .openapi('DescribeServiceErrorsRequest')

const ParametersSchema = z.record(z.string(), StringSchema).openapi('Parameters')

const DescribeStackProvisioningParametersResultSchema = z
  .object({
    AgentInstallerUrl: StringSchema.and(
      z.any().openapi({ description: "The AWS OpsWorks Stacks agent installer's URL." }),
    ).exactOptional(),
    Parameters: ParametersSchema.and(
      z
        .any()
        .openapi({ description: 'An embedded object that contains the provisioning parameters.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains the response to a <code>DescribeStackProvisioningParameters</code> request.',
    required: [],
  })
  .openapi('DescribeStackProvisioningParametersResult')

const DescribeStackProvisioningParametersRequestSchema = z
  .object({ StackId: StringSchema.and(z.any().openapi({ description: 'The stack ID.' })) })
  .openapi({ required: ['StackId'], title: 'DescribeStackProvisioningParametersRequest' })
  .openapi('DescribeStackProvisioningParametersRequest')

const InstancesCountSchema = z
  .object({
    Assigning: IntegerSchema.and(
      z.any().openapi({ description: 'The number of instances in the Assigning state.' }),
    ).exactOptional(),
    Booting: IntegerSchema.and(
      z.any().openapi({ description: 'The number of instances with <code>booting</code> status.' }),
    ).exactOptional(),
    ConnectionLost: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of instances with <code>connection_lost</code> status.',
        }),
    ).exactOptional(),
    Deregistering: IntegerSchema.and(
      z.any().openapi({ description: 'The number of instances in the Deregistering state.' }),
    ).exactOptional(),
    Online: IntegerSchema.and(
      z.any().openapi({ description: 'The number of instances with <code>online</code> status.' }),
    ).exactOptional(),
    Pending: IntegerSchema.and(
      z.any().openapi({ description: 'The number of instances with <code>pending</code> status.' }),
    ).exactOptional(),
    Rebooting: IntegerSchema.and(
      z
        .any()
        .openapi({ description: 'The number of instances with <code>rebooting</code> status.' }),
    ).exactOptional(),
    Registered: IntegerSchema.and(
      z.any().openapi({ description: 'The number of instances in the Registered state.' }),
    ).exactOptional(),
    Registering: IntegerSchema.and(
      z.any().openapi({ description: 'The number of instances in the Registering state.' }),
    ).exactOptional(),
    Requested: IntegerSchema.and(
      z
        .any()
        .openapi({ description: 'The number of instances with <code>requested</code> status.' }),
    ).exactOptional(),
    RunningSetup: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of instances with <code>running_setup</code> status.',
        }),
    ).exactOptional(),
    SetupFailed: IntegerSchema.and(
      z
        .any()
        .openapi({ description: 'The number of instances with <code>setup_failed</code> status.' }),
    ).exactOptional(),
    ShuttingDown: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of instances with <code>shutting_down</code> status.',
        }),
    ).exactOptional(),
    StartFailed: IntegerSchema.and(
      z
        .any()
        .openapi({ description: 'The number of instances with <code>start_failed</code> status.' }),
    ).exactOptional(),
    StopFailed: IntegerSchema.and(
      z
        .any()
        .openapi({ description: 'The number of instances with <code>stop_failed</code> status.' }),
    ).exactOptional(),
    Stopped: IntegerSchema.and(
      z.any().openapi({ description: 'The number of instances with <code>stopped</code> status.' }),
    ).exactOptional(),
    Stopping: IntegerSchema.and(
      z
        .any()
        .openapi({ description: 'The number of instances with <code>stopping</code> status.' }),
    ).exactOptional(),
    Terminated: IntegerSchema.and(
      z
        .any()
        .openapi({ description: 'The number of instances with <code>terminated</code> status.' }),
    ).exactOptional(),
    Terminating: IntegerSchema.and(
      z
        .any()
        .openapi({ description: 'The number of instances with <code>terminating</code> status.' }),
    ).exactOptional(),
    Unassigning: IntegerSchema.and(
      z.any().openapi({ description: 'The number of instances in the Unassigning state.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes how many instances a stack has for each status.',
    required: [],
  })
  .openapi('InstancesCount')

const StackSummarySchema = z
  .object({
    StackId: StringSchema.and(z.any().openapi({ description: 'The stack ID.' })).exactOptional(),
    Name: StringSchema.and(z.any().openapi({ description: 'The stack name.' })).exactOptional(),
    Arn: StringSchema.and(z.any().openapi({ description: "The stack's ARN." })).exactOptional(),
    LayersCount: IntegerSchema.and(
      z.any().openapi({ description: 'The number of layers.' }),
    ).exactOptional(),
    AppsCount: IntegerSchema.and(
      z.any().openapi({ description: 'The number of apps.' }),
    ).exactOptional(),
    InstancesCount: InstancesCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'An <code>InstancesCount</code> object with the number of instances in each status.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Summarizes the number of layers, instances, and apps in a stack.',
    required: [],
  })
  .openapi('StackSummary')

const DescribeStackSummaryResultSchema = z
  .object({
    StackSummary: StackSummarySchema.and(
      z
        .any()
        .openapi({ description: 'A <code>StackSummary</code> object that contains the results.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the response to a <code>DescribeStackSummary</code> request.',
    required: [],
  })
  .openapi('DescribeStackSummaryResult')

const DescribeStackSummaryRequestSchema = z
  .object({ StackId: StringSchema.and(z.any().openapi({ description: 'The stack ID.' })) })
  .openapi({ required: ['StackId'], title: 'DescribeStackSummaryRequest' })
  .openapi('DescribeStackSummaryRequest')

const StackSchema = z
  .object({
    StackId: StringSchema.and(z.any().openapi({ description: 'The stack ID.' })).exactOptional(),
    Name: StringSchema.and(z.any().openapi({ description: 'The stack name.' })).exactOptional(),
    Arn: StringSchema.and(z.any().openapi({ description: "The stack's ARN." })).exactOptional(),
    Region: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The stack AWS region, such as "ap-northeast-2". For more information about AWS regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a>.',
        }),
    ).exactOptional(),
    VpcId: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The VPC ID; applicable only if the stack is running in a VPC.' }),
    ).exactOptional(),
    Attributes: StackAttributesSchema.and(
      z.any().openapi({ description: "The stack's attributes." }),
    ).exactOptional(),
    ServiceRoleArn: StringSchema.and(
      z.any().openapi({ description: 'The stack AWS Identity and Access Management (IAM) role.' }),
    ).exactOptional(),
    DefaultInstanceProfileArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of an IAM profile that is the default profile for all of the stack\'s EC2 instances. For more information about IAM ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">Using Identifiers</a>.',
        }),
    ).exactOptional(),
    DefaultOs: StringSchema.and(
      z.any().openapi({ description: "The stack's default operating system." }),
    ).exactOptional(),
    HostnameTheme: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The stack host name theme, with spaces replaced by underscores.',
        }),
    ).exactOptional(),
    DefaultAvailabilityZone: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The stack\'s default Availability Zone. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a>.',
        }),
    ).exactOptional(),
    DefaultSubnetId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The default subnet ID; applicable only if the stack is running in a VPC.',
        }),
    ).exactOptional(),
    CustomJson: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A JSON object that contains user-defined attributes to be added to the stack configuration and deployment attributes. You can use custom JSON to override the corresponding default stack configuration attribute values or to pass data to recipes. The string should be in the following format:</p> <p> <code>"{\\"key1\\": \\"value1\\", \\"key2\\": \\"value2\\",...}"</code> </p> <p>For more information on custom JSON, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-json.html">Use Custom JSON to Modify the Stack Configuration Attributes</a>.</p>',
        }),
    ).exactOptional(),
    ConfigurationManager: StackConfigurationManagerSchema.and(
      z.any().openapi({ description: 'The configuration manager.' }),
    ).exactOptional(),
    ChefConfiguration: ChefConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>ChefConfiguration</code> object that specifies whether to enable Berkshelf and the Berkshelf version. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-creating.html">Create a New Stack</a>.',
        }),
    ).exactOptional(),
    UseCustomCookbooks: BooleanSchema.and(
      z.any().openapi({ description: 'Whether the stack uses custom cookbooks.' }),
    ).exactOptional(),
    UseOpsworksSecurityGroups: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Whether the stack automatically associates the AWS OpsWorks Stacks built-in security groups with the stack's layers.",
        }),
    ).exactOptional(),
    CustomCookbooksSource: SourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains the information required to retrieve an app or cookbook from a repository. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Adding Apps</a> or <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html">Cookbooks and Recipes</a>.',
        }),
    ).exactOptional(),
    DefaultSshKeyName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A default Amazon EC2 key pair for the stack's instances. You can override this value when you create or update an instance.",
        }),
    ).exactOptional(),
    CreatedAt: DateTimeSchema.and(
      z.any().openapi({ description: 'The date when the stack was created.' }),
    ).exactOptional(),
    DefaultRootDeviceType: RootDeviceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The default root device type. This value is used by default for all instances in the stack, but you can override it when you create an instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ComponentsAMIs.html#storage-for-the-root-device">Storage for the Root Device</a>.',
        }),
    ).exactOptional(),
    AgentVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The agent version. This parameter is set to <code>LATEST</code> for auto-update. or a version number for a fixed agent version.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a stack.', required: [] })
  .openapi('Stack')

const StacksSchema = z.array(StackSchema).openapi('Stacks')

const DescribeStacksResultSchema = z
  .object({
    Stacks: StacksSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of <code>Stack</code> objects that describe the stacks.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the response to a <code>DescribeStacks</code> request.',
    required: [],
  })
  .openapi('DescribeStacksResult')

const DescribeStacksRequestSchema = z
  .object({
    StackIds: StringsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of stack IDs that specify the stacks to be described. If you omit this parameter, <code>DescribeStacks</code> returns a description of every stack.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeStacksRequest', required: [] })
  .openapi('DescribeStacksRequest')

const SwitchSchema = z.string().openapi('Switch')

const DailyAutoScalingScheduleSchema = z
  .record(z.string(), SwitchSchema)
  .openapi('DailyAutoScalingSchedule')

const WeeklyAutoScalingScheduleSchema = z
  .object({
    Monday: DailyAutoScalingScheduleSchema.and(
      z.any().openapi({ description: 'The schedule for Monday.' }),
    ).exactOptional(),
    Tuesday: DailyAutoScalingScheduleSchema.and(
      z.any().openapi({ description: 'The schedule for Tuesday.' }),
    ).exactOptional(),
    Wednesday: DailyAutoScalingScheduleSchema.and(
      z.any().openapi({ description: 'The schedule for Wednesday.' }),
    ).exactOptional(),
    Thursday: DailyAutoScalingScheduleSchema.and(
      z.any().openapi({ description: 'The schedule for Thursday.' }),
    ).exactOptional(),
    Friday: DailyAutoScalingScheduleSchema.and(
      z.any().openapi({ description: 'The schedule for Friday.' }),
    ).exactOptional(),
    Saturday: DailyAutoScalingScheduleSchema.and(
      z.any().openapi({ description: 'The schedule for Saturday.' }),
    ).exactOptional(),
    Sunday: DailyAutoScalingScheduleSchema.and(
      z.any().openapi({ description: 'The schedule for Sunday.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes a time-based instance\'s auto scaling schedule. The schedule consists of a set of key-value pairs.</p> <ul> <li> <p>The key is the time period (a UTC hour) and must be an integer from 0 - 23.</p> </li> <li> <p>The value indicates whether the instance should be online or offline for the specified period, and must be set to "on" or "off"</p> </li> </ul> <p>The default setting for all time periods is off, so you use the following parameters primarily to specify the online periods. You don\'t have to explicitly specify offline periods unless you want to change an online period to an offline period.</p> <p>The following example specifies that the instance should be online for four hours, from UTC 1200 - 1600. It will be off for the remainder of the day.</p> <p> <code> { "12":"on", "13":"on", "14":"on", "15":"on" } </code> </p>',
    required: [],
  })
  .openapi('WeeklyAutoScalingSchedule')

const TimeBasedAutoScalingConfigurationSchema = z
  .object({
    InstanceId: StringSchema.and(
      z.any().openapi({ description: 'The instance ID.' }),
    ).exactOptional(),
    AutoScalingSchedule: WeeklyAutoScalingScheduleSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>WeeklyAutoScalingSchedule</code> object with the instance schedule.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: "Describes an instance's time-based auto scaling configuration.",
    required: [],
  })
  .openapi('TimeBasedAutoScalingConfiguration')

const TimeBasedAutoScalingConfigurationsSchema = z
  .array(TimeBasedAutoScalingConfigurationSchema)
  .openapi('TimeBasedAutoScalingConfigurations')

const DescribeTimeBasedAutoScalingResultSchema = z
  .object({
    TimeBasedAutoScalingConfigurations: TimeBasedAutoScalingConfigurationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>TimeBasedAutoScalingConfiguration</code> objects that describe the configuration for the specified instances.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the response to a <code>DescribeTimeBasedAutoScaling</code> request.',
    required: [],
  })
  .openapi('DescribeTimeBasedAutoScalingResult')

const DescribeTimeBasedAutoScalingRequestSchema = z
  .object({
    InstanceIds: StringsSchema.and(z.any().openapi({ description: 'An array of instance IDs.' })),
  })
  .openapi({ required: ['InstanceIds'], title: 'DescribeTimeBasedAutoScalingRequest' })
  .openapi('DescribeTimeBasedAutoScalingRequest')

const UserProfileSchema = z
  .object({
    IamUserArn: StringSchema.and(
      z.any().openapi({ description: "The user's IAM ARN." }),
    ).exactOptional(),
    Name: StringSchema.and(z.any().openapi({ description: "The user's name." })).exactOptional(),
    SshUsername: StringSchema.and(
      z.any().openapi({ description: "The user's SSH user name." }),
    ).exactOptional(),
    SshPublicKey: StringSchema.and(
      z.any().openapi({ description: "The user's SSH public key." }),
    ).exactOptional(),
    AllowSelfManagement: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether users can specify their own SSH public key through the My Settings page. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/security-settingsshkey.html">Managing User Permissions</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: "Describes a user's SSH information.", required: [] })
  .openapi('UserProfile')

const UserProfilesSchema = z.array(UserProfileSchema).openapi('UserProfiles')

const DescribeUserProfilesResultSchema = z
  .object({
    UserProfiles: UserProfilesSchema.and(
      z
        .any()
        .openapi({
          description: 'A <code>Users</code> object that describes the specified users.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the response to a <code>DescribeUserProfiles</code> request.',
    required: [],
  })
  .openapi('DescribeUserProfilesResult')

const DescribeUserProfilesRequestSchema = z
  .object({
    IamUserArns: StringsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of IAM or federated user ARNs that identify the users to be described.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeUserProfilesRequest', required: [] })
  .openapi('DescribeUserProfilesRequest')

const VolumeSchema = z
  .object({
    VolumeId: StringSchema.and(z.any().openapi({ description: 'The volume ID.' })).exactOptional(),
    Ec2VolumeId: StringSchema.and(
      z.any().openapi({ description: 'The Amazon EC2 volume ID.' }),
    ).exactOptional(),
    Name: StringSchema.and(z.any().openapi({ description: 'The volume name.' })).exactOptional(),
    RaidArrayId: StringSchema.and(
      z.any().openapi({ description: 'The RAID array ID.' }),
    ).exactOptional(),
    InstanceId: StringSchema.and(
      z.any().openapi({ description: 'The instance ID.' }),
    ).exactOptional(),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value returned by <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeVolumes.html">DescribeVolumes</a>.',
        }),
    ).exactOptional(),
    Size: IntegerSchema.and(z.any().openapi({ description: 'The volume size.' })).exactOptional(),
    Device: StringSchema.and(z.any().openapi({ description: 'The device name.' })).exactOptional(),
    MountPoint: StringSchema.and(
      z.any().openapi({ description: 'The volume mount point. For example, "/mnt/disk1".' }),
    ).exactOptional(),
    Region: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The AWS region. For more information about AWS regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a>.',
        }),
    ).exactOptional(),
    AvailabilityZone: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The volume Availability Zone. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a>.',
        }),
    ).exactOptional(),
    VolumeType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The volume type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html"> Amazon EBS Volume Types</a>.</p> <ul> <li> <p> <code>standard</code> - Magnetic. Magnetic volumes must have a minimum size of 1 GiB and a maximum size of 1024 GiB.</p> </li> <li> <p> <code>io1</code> - Provisioned IOPS (SSD). PIOPS volumes must have a minimum size of 4 GiB and a maximum size of 16384 GiB.</p> </li> <li> <p> <code>gp2</code> - General Purpose (SSD). General purpose volumes must have a minimum size of 1 GiB and a maximum size of 16384 GiB.</p> </li> <li> <p> <code>st1</code> - Throughput Optimized hard disk drive (HDD). Throughput optimized HDD volumes must have a minimum size of 500 GiB and a maximum size of 16384 GiB.</p> </li> <li> <p> <code>sc1</code> - Cold HDD. Cold HDD volumes must have a minimum size of 500 GiB and a maximum size of 16384 GiB.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Iops: IntegerSchema.and(
      z.any().openapi({ description: 'For PIOPS volumes, the IOPS per disk.' }),
    ).exactOptional(),
    Encrypted: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether an Amazon EBS volume is encrypted. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS Encryption</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: "Describes an instance's Amazon EBS volume.", required: [] })
  .openapi('Volume')

const VolumesSchema = z.array(VolumeSchema).openapi('Volumes')

const DescribeVolumesResultSchema = z
  .object({
    Volumes: VolumesSchema.and(
      z.any().openapi({ description: 'An array of volume IDs.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the response to a <code>DescribeVolumes</code> request.',
    required: [],
  })
  .openapi('DescribeVolumesResult')

const DescribeVolumesRequestSchema = z
  .object({
    InstanceId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The instance ID. If you use this parameter, <code>DescribeVolumes</code> returns descriptions of the volumes associated with the specified instance.',
        }),
    ).exactOptional(),
    StackId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A stack ID. The action describes the stack's registered Amazon EBS volumes.",
        }),
    ).exactOptional(),
    RaidArrayId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The RAID array ID. If you use this parameter, <code>DescribeVolumes</code> returns descriptions of the volumes associated with the specified RAID array.',
        }),
    ).exactOptional(),
    VolumeIds: StringsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Am array of volume IDs. If you use this parameter, <code>DescribeVolumes</code> returns descriptions of the specified volumes. Otherwise, it returns a description of every volume.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeVolumesRequest', required: [] })
  .openapi('DescribeVolumesRequest')

const DetachElasticLoadBalancerRequestSchema = z
  .object({
    ElasticLoadBalancerName: StringSchema.and(
      z.any().openapi({ description: "The Elastic Load Balancing instance's name." }),
    ),
    LayerId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the layer that the Elastic Load Balancing instance is attached to.',
        }),
    ),
  })
  .openapi({
    required: ['ElasticLoadBalancerName', 'LayerId'],
    title: 'DetachElasticLoadBalancerRequest',
  })
  .openapi('DetachElasticLoadBalancerRequest')

const DisassociateElasticIpRequestSchema = z
  .object({
    ElasticIp: StringSchema.and(z.any().openapi({ description: 'The Elastic IP address.' })),
  })
  .openapi({ required: ['ElasticIp'], title: 'DisassociateElasticIpRequest' })
  .openapi('DisassociateElasticIpRequest')

const GetHostnameSuggestionResultSchema = z
  .object({
    LayerId: StringSchema.and(z.any().openapi({ description: 'The layer ID.' })).exactOptional(),
    Hostname: StringSchema.and(
      z.any().openapi({ description: 'The generated host name.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the response to a <code>GetHostnameSuggestion</code> request.',
    required: [],
  })
  .openapi('GetHostnameSuggestionResult')

const GetHostnameSuggestionRequestSchema = z
  .object({ LayerId: StringSchema.and(z.any().openapi({ description: 'The layer ID.' })) })
  .openapi({ required: ['LayerId'], title: 'GetHostnameSuggestionRequest' })
  .openapi('GetHostnameSuggestionRequest')

const TemporaryCredentialSchema = z
  .object({
    Username: StringSchema.and(z.any().openapi({ description: 'The user name.' })).exactOptional(),
    Password: StringSchema.and(z.any().openapi({ description: 'The password.' })).exactOptional(),
    ValidForInMinutes: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The length of time (in minutes) that the grant is valid. When the grant expires, at the end of this period, the user will no longer be able to use the credentials to log in. If they are logged in at the time, they will be automatically logged out.',
        }),
    ).exactOptional(),
    InstanceId: StringSchema.and(
      z.any().openapi({ description: "The instance's AWS OpsWorks Stacks ID." }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains the data needed by RDP clients such as the Microsoft Remote Desktop Connection to log in to the instance.',
    required: [],
  })
  .openapi('TemporaryCredential')

const GrantAccessResultSchema = z
  .object({
    TemporaryCredential: TemporaryCredentialSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>TemporaryCredential</code> object that contains the data needed to log in to the instance by RDP clients, such as the Microsoft Remote Desktop Connection.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the response to a <code>GrantAccess</code> request.',
    required: [],
  })
  .openapi('GrantAccessResult')

const ValidForInMinutesSchema = z.int().min(60).max(1440).openapi('ValidForInMinutes')

const GrantAccessRequestSchema = z
  .object({
    InstanceId: StringSchema.and(
      z.any().openapi({ description: "The instance's AWS OpsWorks Stacks ID." }),
    ),
    ValidForInMinutes: ValidForInMinutesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The length of time (in minutes) that the grant is valid. When the grant expires at the end of this period, the user will no longer be able to use the credentials to log in. If the user is logged in at the time, he or she automatically will be logged out.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['InstanceId'], title: 'GrantAccessRequest' })
  .openapi('GrantAccessRequest')

const TagValueSchema = z.string().openapi('TagValue')

const TagsSchema = z.record(z.string(), TagValueSchema).openapi('Tags')

const NextTokenSchema = z.string().openapi('NextToken')

const ListTagsResultSchema = z
  .object({
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of key-value pairs that contain tag keys and tag values that are attached to a stack or layer.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "If a paginated request does not return all of the remaining results, this parameter is set to a token that you can assign to the request object's <code>NextToken</code> parameter to get the next set of results. If the previous paginated request returned all of the remaining results, this parameter is set to <code>null</code>. ",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the response to a <code>ListTags</code> request.',
    required: [],
  })
  .openapi('ListTagsResult')

const ResourceArnSchema = z.string().openapi('ResourceArn')

const MaxResultsSchema = z.int().openapi('MaxResults')

const ListTagsRequestSchema = z
  .object({
    ResourceArn: ResourceArnSchema.and(
      z.any().openapi({ description: "The stack or layer's Amazon Resource Number (ARN)." }),
    ),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Do not use. A validation exception occurs if you add a <code>MaxResults</code> parameter to a <code>ListTagsRequest</code> call. ',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Do not use. A validation exception occurs if you add a <code>NextToken</code> parameter to a <code>ListTagsRequest</code> call. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ResourceArn'], title: 'ListTagsRequest' })
  .openapi('ListTagsRequest')

const RebootInstanceRequestSchema = z
  .object({ InstanceId: StringSchema.and(z.any().openapi({ description: 'The instance ID.' })) })
  .openapi({ required: ['InstanceId'], title: 'RebootInstanceRequest' })
  .openapi('RebootInstanceRequest')

const RegisterEcsClusterResultSchema = z
  .object({
    EcsClusterArn: StringSchema.and(
      z.any().openapi({ description: "The cluster's ARN." }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the response to a <code>RegisterEcsCluster</code> request.',
    required: [],
  })
  .openapi('RegisterEcsClusterResult')

const RegisterEcsClusterRequestSchema = z
  .object({
    EcsClusterArn: StringSchema.and(z.any().openapi({ description: "The cluster's ARN." })),
    StackId: StringSchema.and(z.any().openapi({ description: 'The stack ID.' })),
  })
  .openapi({ required: ['EcsClusterArn', 'StackId'], title: 'RegisterEcsClusterRequest' })
  .openapi('RegisterEcsClusterRequest')

const RegisterElasticIpResultSchema = z
  .object({
    ElasticIp: StringSchema.and(
      z.any().openapi({ description: 'The Elastic IP address.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the response to a <code>RegisterElasticIp</code> request.',
    required: [],
  })
  .openapi('RegisterElasticIpResult')

const RegisterElasticIpRequestSchema = z
  .object({
    ElasticIp: StringSchema.and(z.any().openapi({ description: 'The Elastic IP address.' })),
    StackId: StringSchema.and(z.any().openapi({ description: 'The stack ID.' })),
  })
  .openapi({ required: ['ElasticIp', 'StackId'], title: 'RegisterElasticIpRequest' })
  .openapi('RegisterElasticIpRequest')

const RegisterInstanceResultSchema = z
  .object({
    InstanceId: StringSchema.and(
      z.any().openapi({ description: "The registered instance's AWS OpsWorks Stacks ID." }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the response to a <code>RegisterInstanceResult</code> request.',
    required: [],
  })
  .openapi('RegisterInstanceResult')

const InstanceIdentitySchema = z
  .object({
    Document: StringSchema.and(
      z.any().openapi({ description: 'A JSON document that contains the metadata.' }),
    ).exactOptional(),
    Signature: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A signature that can be used to verify the document's accuracy and authenticity.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains a description of an Amazon EC2 instance from the Amazon EC2 metadata service. For more information, see <a href="https://docs.aws.amazon.com/sdkfornet/latest/apidocs/Index.html">Instance Metadata and User Data</a>.',
    required: [],
  })
  .openapi('InstanceIdentity')

const RegisterInstanceRequestSchema = z
  .object({
    StackId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the stack that the instance is to be registered with.',
        }),
    ),
    Hostname: StringSchema.and(
      z.any().openapi({ description: "The instance's hostname." }),
    ).exactOptional(),
    PublicIp: StringSchema.and(
      z.any().openapi({ description: "The instance's public IP address." }),
    ).exactOptional(),
    PrivateIp: StringSchema.and(
      z.any().openapi({ description: "The instance's private IP address." }),
    ).exactOptional(),
    RsaPublicKey: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The instances public RSA key. This key is used to encrypt communication between the instance and the service.',
        }),
    ).exactOptional(),
    RsaPublicKeyFingerprint: StringSchema.and(
      z.any().openapi({ description: 'The instances public RSA key fingerprint.' }),
    ).exactOptional(),
    InstanceIdentity: InstanceIdentitySchema.and(
      z
        .any()
        .openapi({
          description: "An InstanceIdentity object that contains the instance's identity.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['StackId'], title: 'RegisterInstanceRequest' })
  .openapi('RegisterInstanceRequest')

const RegisterRdsDbInstanceRequestSchema = z
  .object({
    StackId: StringSchema.and(z.any().openapi({ description: 'The stack ID.' })),
    RdsDbInstanceArn: StringSchema.and(
      z.any().openapi({ description: "The Amazon RDS instance's ARN." }),
    ),
    DbUser: StringSchema.and(z.any().openapi({ description: "The database's master user name." })),
    DbPassword: StringSchema.and(z.any().openapi({ description: 'The database password.' })),
  })
  .openapi({
    required: ['StackId', 'RdsDbInstanceArn', 'DbUser', 'DbPassword'],
    title: 'RegisterRdsDbInstanceRequest',
  })
  .openapi('RegisterRdsDbInstanceRequest')

const RegisterVolumeResultSchema = z
  .object({
    VolumeId: StringSchema.and(z.any().openapi({ description: 'The volume ID.' })).exactOptional(),
  })
  .openapi({
    description: 'Contains the response to a <code>RegisterVolume</code> request.',
    required: [],
  })
  .openapi('RegisterVolumeResult')

const RegisterVolumeRequestSchema = z
  .object({
    Ec2VolumeId: StringSchema.and(
      z.any().openapi({ description: 'The Amazon EBS volume ID.' }),
    ).exactOptional(),
    StackId: StringSchema.and(z.any().openapi({ description: 'The stack ID.' })),
  })
  .openapi({ required: ['StackId'], title: 'RegisterVolumeRequest' })
  .openapi('RegisterVolumeRequest')

const SetLoadBasedAutoScalingRequestSchema = z
  .object({
    LayerId: StringSchema.and(z.any().openapi({ description: 'The layer ID.' })),
    Enable: BooleanSchema.and(
      z.any().openapi({ description: 'Enables load-based auto scaling for the layer.' }),
    ).exactOptional(),
    UpScaling: AutoScalingThresholdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An <code>AutoScalingThresholds</code> object with the upscaling threshold configuration. If the load exceeds these thresholds for a specified amount of time, AWS OpsWorks Stacks starts a specified number of instances.',
        }),
    ).exactOptional(),
    DownScaling: AutoScalingThresholdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An <code>AutoScalingThresholds</code> object with the downscaling threshold configuration. If the load falls below these thresholds for a specified amount of time, AWS OpsWorks Stacks stops a specified number of instances.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['LayerId'], title: 'SetLoadBasedAutoScalingRequest' })
  .openapi('SetLoadBasedAutoScalingRequest')

const SetPermissionRequestSchema = z
  .object({
    StackId: StringSchema.and(z.any().openapi({ description: 'The stack ID.' })),
    IamUserArn: StringSchema.and(
      z
        .any()
        .openapi({ description: "The user's IAM ARN. This can also be a federated user's ARN." }),
    ),
    AllowSsh: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'The user is allowed to use SSH to communicate with the instance.',
        }),
    ).exactOptional(),
    AllowSudo: BooleanSchema.and(
      z
        .any()
        .openapi({ description: 'The user is allowed to use <b>sudo</b> to elevate privileges.' }),
    ).exactOptional(),
    Level: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The user\'s permission level, which must be set to one of the following strings. You cannot set your own permissions level.</p> <ul> <li> <p> <code>deny</code> </p> </li> <li> <p> <code>show</code> </p> </li> <li> <p> <code>deploy</code> </p> </li> <li> <p> <code>manage</code> </p> </li> <li> <p> <code>iam_only</code> </p> </li> </ul> <p>For more information about the permissions associated with these levels, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['StackId', 'IamUserArn'], title: 'SetPermissionRequest' })
  .openapi('SetPermissionRequest')

const SetTimeBasedAutoScalingRequestSchema = z
  .object({
    InstanceId: StringSchema.and(z.any().openapi({ description: 'The instance ID.' })),
    AutoScalingSchedule: WeeklyAutoScalingScheduleSchema.and(
      z
        .any()
        .openapi({
          description: 'An <code>AutoScalingSchedule</code> with the instance schedule.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['InstanceId'], title: 'SetTimeBasedAutoScalingRequest' })
  .openapi('SetTimeBasedAutoScalingRequest')

const StartInstanceRequestSchema = z
  .object({ InstanceId: StringSchema.and(z.any().openapi({ description: 'The instance ID.' })) })
  .openapi({ required: ['InstanceId'], title: 'StartInstanceRequest' })
  .openapi('StartInstanceRequest')

const StartStackRequestSchema = z
  .object({ StackId: StringSchema.and(z.any().openapi({ description: 'The stack ID.' })) })
  .openapi({ required: ['StackId'], title: 'StartStackRequest' })
  .openapi('StartStackRequest')

const StopInstanceRequestSchema = z
  .object({
    InstanceId: StringSchema.and(z.any().openapi({ description: 'The instance ID.' })),
    Force: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether to force an instance to stop. If the instance's root device type is <code>ebs</code>, or EBS-backed, adding the <code>Force</code> parameter to the <code>StopInstances</code> API call disassociates the AWS OpsWorks Stacks instance from EC2, and forces deletion of <i>only</i> the OpsWorks Stacks instance. You must also delete the formerly-associated instance in EC2 after troubleshooting and replacing the AWS OpsWorks Stacks instance with a new one.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['InstanceId'], title: 'StopInstanceRequest' })
  .openapi('StopInstanceRequest')

const StopStackRequestSchema = z
  .object({ StackId: StringSchema.and(z.any().openapi({ description: 'The stack ID.' })) })
  .openapi({ required: ['StackId'], title: 'StopStackRequest' })
  .openapi('StopStackRequest')

const TagResourceRequestSchema = z
  .object({
    ResourceArn: ResourceArnSchema.and(
      z.any().openapi({ description: "The stack or layer's Amazon Resource Number (ARN)." }),
    ),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A map that contains tag keys and tag values that are attached to a stack or layer.</p> <ul> <li> <p>The key cannot be empty.</p> </li> <li> <p>The key can be a maximum of 127 characters, and can contain only Unicode letters, numbers, or separators, or the following special characters: <code>+ - = . _ : /</code> </p> </li> <li> <p>The value can be a maximum 255 characters, and contain only Unicode letters, numbers, or separators, or the following special characters: <code>+ - = . _ : /</code> </p> </li> <li> <p>Leading and trailing white spaces are trimmed from both the key and value.</p> </li> <li> <p>A maximum of 40 tags is allowed for any resource.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UnassignInstanceRequestSchema = z
  .object({ InstanceId: StringSchema.and(z.any().openapi({ description: 'The instance ID.' })) })
  .openapi({ required: ['InstanceId'], title: 'UnassignInstanceRequest' })
  .openapi('UnassignInstanceRequest')

const UnassignVolumeRequestSchema = z
  .object({ VolumeId: StringSchema.and(z.any().openapi({ description: 'The volume ID.' })) })
  .openapi({ required: ['VolumeId'], title: 'UnassignVolumeRequest' })
  .openapi('UnassignVolumeRequest')

const TagKeySchema = z.string().openapi('TagKey')

const TagKeysSchema = z.array(TagKeySchema).openapi('TagKeys')

const UntagResourceRequestSchema = z
  .object({
    ResourceArn: ResourceArnSchema.and(
      z.any().openapi({ description: "The stack or layer's Amazon Resource Number (ARN)." }),
    ),
    TagKeys: TagKeysSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of the keys of tags to be removed from a stack or layer.',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateAppRequestSchema = z
  .object({
    AppId: StringSchema.and(z.any().openapi({ description: 'The app ID.' })),
    Name: StringSchema.and(z.any().openapi({ description: 'The app name.' })).exactOptional(),
    Description: StringSchema.and(
      z.any().openapi({ description: 'A description of the app.' }),
    ).exactOptional(),
    DataSources: DataSourcesSchema.and(
      z.any().openapi({ description: "The app's data sources." }),
    ).exactOptional(),
    Type: AppTypeSchema.and(z.any().openapi({ description: 'The app type.' })).exactOptional(),
    AppSource: SourceSchema.and(
      z
        .any()
        .openapi({
          description: 'A <code>Source</code> object that specifies the app repository.',
        }),
    ).exactOptional(),
    Domains: StringsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The app's virtual host settings, with multiple domains separated by commas. For example: <code>'www.example.com, example.com'</code> ",
        }),
    ).exactOptional(),
    EnableSsl: BooleanSchema.and(
      z.any().openapi({ description: 'Whether SSL is enabled for the app.' }),
    ).exactOptional(),
    SslConfiguration: SslConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'An <code>SslConfiguration</code> object with the SSL configuration.',
        }),
    ).exactOptional(),
    Attributes: AppAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more user-defined key/value pairs to be added to the stack attributes.',
        }),
    ).exactOptional(),
    Environment: EnvironmentVariablesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of <code>EnvironmentVariable</code> objects that specify environment variables to be associated with the app. After you deploy the app, these variables are defined on the associated app server instances.For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html#workingapps-creating-environment"> Environment Variables</a>.</p> <p>There is no specific limit on the number of environment variables. However, the size of the associated data structure - which includes the variables\' names, values, and protected flag values - cannot exceed 20 KB. This limit should accommodate most if not all use cases. Exceeding it will cause an exception with the message, "Environment: is too large (maximum is 20 KB)."</p> <note> <p>If you have specified one or more environment variables, you cannot modify the stack\'s Chef version.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['AppId'], title: 'UpdateAppRequest' })
  .openapi('UpdateAppRequest')

const UpdateElasticIpRequestSchema = z
  .object({
    ElasticIp: StringSchema.and(
      z.any().openapi({ description: 'The IP address for which you want to update the name.' }),
    ),
    Name: StringSchema.and(z.any().openapi({ description: 'The new name.' })).exactOptional(),
  })
  .openapi({ required: ['ElasticIp'], title: 'UpdateElasticIpRequest' })
  .openapi('UpdateElasticIpRequest')

const UpdateInstanceRequestSchema = z
  .object({
    InstanceId: StringSchema.and(z.any().openapi({ description: 'The instance ID.' })),
    LayerIds: StringsSchema.and(
      z.any().openapi({ description: "The instance's layer IDs." }),
    ).exactOptional(),
    InstanceType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The instance type, such as <code>t2.micro</code>. For a list of supported instance types, open the stack in the console, choose <b>Instances</b>, and choose <b>+ Instance</b>. The <b>Size</b> list contains the currently supported types. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance Families and Types</a>. The parameter values that you use to specify the various types are in the <b>API Name</b> column of the <b>Available Instance Types</b> table.',
        }),
    ).exactOptional(),
    AutoScalingType: AutoScalingTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'For load-based or time-based instances, the type. Windows stacks can use only time-based instances.',
        }),
    ).exactOptional(),
    Hostname: StringSchema.and(
      z.any().openapi({ description: 'The instance host name.' }),
    ).exactOptional(),
    Os: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The instance\'s operating system, which must be set to one of the following. You cannot update an instance that is using a custom AMI.</p> <ul> <li> <p>A supported Linux operating system: An Amazon Linux version, such as <code>Amazon Linux 2018.03</code>, <code>Amazon Linux 2017.09</code>, <code>Amazon Linux 2017.03</code>, <code>Amazon Linux 2016.09</code>, <code>Amazon Linux 2016.03</code>, <code>Amazon Linux 2015.09</code>, or <code>Amazon Linux 2015.03</code>.</p> </li> <li> <p>A supported Ubuntu operating system, such as <code>Ubuntu 16.04 LTS</code>, <code>Ubuntu 14.04 LTS</code>, or <code>Ubuntu 12.04 LTS</code>.</p> </li> <li> <p> <code>CentOS Linux 7</code> </p> </li> <li> <p> <code>Red Hat Enterprise Linux 7</code> </p> </li> <li> <p>A supported Windows operating system, such as <code>Microsoft Windows Server 2012 R2 Base</code>, <code>Microsoft Windows Server 2012 R2 with SQL Server Express</code>, <code>Microsoft Windows Server 2012 R2 with SQL Server Standard</code>, or <code>Microsoft Windows Server 2012 R2 with SQL Server Web</code>.</p> </li> </ul> <p>For more information about supported operating systems, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-os.html">AWS OpsWorks Stacks Operating Systems</a>.</p> <p>The default option is the current Amazon Linux version. If you set this parameter to <code>Custom</code>, you must use the AmiId parameter to specify the custom AMI that you want to use. For more information about supported operating systems, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-os.html">Operating Systems</a>. For more information about how to use custom AMIs with OpsWorks, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-custom-ami.html">Using Custom AMIs</a>.</p> <note> <p>You can specify a different Linux operating system for the updated stack, but you cannot change from Linux to Windows or Windows to Linux.</p> </note>',
        }),
    ).exactOptional(),
    AmiId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the AMI that was used to create the instance. The value of this parameter must be the same AMI ID that the instance is already using. You cannot apply a new AMI to an instance by running UpdateInstance. UpdateInstance does not work on instances that are using custom AMIs. ',
        }),
    ).exactOptional(),
    SshKeyName: StringSchema.and(
      z.any().openapi({ description: "The instance's Amazon EC2 key name." }),
    ).exactOptional(),
    Architecture: ArchitectureSchema.and(
      z
        .any()
        .openapi({
          description:
            'The instance architecture. Instance types do not necessarily support both architectures. For a list of the architectures that are supported by the different instance types, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance Families and Types</a>.',
        }),
    ).exactOptional(),
    InstallUpdatesOnBoot: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Whether to install operating system and package updates when the instance boots. The default value is <code>true</code>. To control when updates are installed, set this value to <code>false</code>. You must then update your instances manually by using <a>CreateDeployment</a> to run the <code>update_dependencies</code> stack command or by manually running <code>yum</code> (Amazon Linux) or <code>apt-get</code> (Ubuntu) on the instances. </p> <note> <p>We strongly recommend using the default value of <code>true</code>, to ensure that your instances have the latest security updates.</p> </note>',
        }),
    ).exactOptional(),
    EbsOptimized: BooleanSchema.and(
      z.any().openapi({ description: 'This property cannot be updated.' }),
    ).exactOptional(),
    AgentVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The default AWS OpsWorks Stacks agent version. You have the following options:</p> <ul> <li> <p> <code>INHERIT</code> - Use the stack's default agent version setting.</p> </li> <li> <p> <i>version_number</i> - Use the specified agent version. This value overrides the stack's default setting. To update the agent version, you must edit the instance configuration and specify a new version. AWS OpsWorks Stacks then automatically installs that version on the instance.</p> </li> </ul> <p>The default setting is <code>INHERIT</code>. To specify an agent version, you must use the complete version number, not the abbreviated number shown on the console. For a list of available agent version numbers, call <a>DescribeAgentVersions</a>.</p> <p>AgentVersion cannot be set to Chef 12.2.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['InstanceId'], title: 'UpdateInstanceRequest' })
  .openapi('UpdateInstanceRequest')

const UpdateLayerRequestSchema = z
  .object({
    LayerId: StringSchema.and(z.any().openapi({ description: 'The layer ID.' })),
    Name: StringSchema.and(
      z.any().openapi({ description: 'The layer name, which is used by the console.' }),
    ).exactOptional(),
    Shortname: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For custom layers only, use this parameter to specify the layer\'s short name, which is used internally by AWS OpsWorks Stacks and by Chef. The short name is also used as the name for the directory where your app files are installed. It can have a maximum of 200 characters and must be in the following format: /\\A[a-z0-9\\-\\_\\.]+\\Z/.</p> <p>The built-in layers\' short names are defined by AWS OpsWorks Stacks. For more information, see the <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/layers.html">Layer Reference</a> </p>',
        }),
    ).exactOptional(),
    Attributes: LayerAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more user-defined key/value pairs to be added to the stack attributes.',
        }),
    ).exactOptional(),
    CloudWatchLogsConfiguration: CloudWatchLogsConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies CloudWatch Logs configuration options for the layer. For more information, see <a>CloudWatchLogsLogStream</a>.',
        }),
    ).exactOptional(),
    CustomInstanceProfileArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of an IAM profile to be used for all of the layer\'s EC2 instances. For more information about IAM ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">Using Identifiers</a>.',
        }),
    ).exactOptional(),
    CustomJson: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A JSON-formatted string containing custom stack configuration and deployment attributes to be installed on the layer\'s instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook-json-override.html"> Using Custom JSON</a>. ',
        }),
    ).exactOptional(),
    CustomSecurityGroupIds: StringsSchema.and(
      z
        .any()
        .openapi({ description: "An array containing the layer's custom security group IDs." }),
    ).exactOptional(),
    Packages: StringsSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of <code>Package</code> objects that describe the layer's packages.",
        }),
    ).exactOptional(),
    VolumeConfigurations: VolumeConfigurationsSchema.and(
      z
        .any()
        .openapi({
          description:
            "A <code>VolumeConfigurations</code> object that describes the layer's Amazon EBS volumes.",
        }),
    ).exactOptional(),
    EnableAutoHealing: BooleanSchema.and(
      z.any().openapi({ description: 'Whether to disable auto healing for the layer.' }),
    ).exactOptional(),
    AutoAssignElasticIps: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether to automatically assign an <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP address</a> to the layer\'s instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-edit.html">How to Edit a Layer</a>.',
        }),
    ).exactOptional(),
    AutoAssignPublicIps: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'For stacks that are running in a VPC, whether to automatically assign a public IP address to the layer\'s instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-edit.html">How to Edit a Layer</a>.',
        }),
    ).exactOptional(),
    CustomRecipes: RecipesSchema.and(
      z
        .any()
        .openapi({
          description:
            "A <code>LayerCustomRecipes</code> object that specifies the layer's custom recipes.",
        }),
    ).exactOptional(),
    InstallUpdatesOnBoot: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Whether to install operating system and package updates when the instance boots. The default value is <code>true</code>. To control when updates are installed, set this value to <code>false</code>. You must then update your instances manually by using <a>CreateDeployment</a> to run the <code>update_dependencies</code> stack command or manually running <code>yum</code> (Amazon Linux) or <code>apt-get</code> (Ubuntu) on the instances. </p> <note> <p>We strongly recommend using the default value of <code>true</code>, to ensure that your instances have the latest security updates.</p> </note>',
        }),
    ).exactOptional(),
    UseEbsOptimizedInstances: BooleanSchema.and(
      z.any().openapi({ description: 'Whether to use Amazon EBS-optimized instances.' }),
    ).exactOptional(),
    LifecycleEventConfiguration: LifecycleEventConfigurationSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
  })
  .openapi({ required: ['LayerId'], title: 'UpdateLayerRequest' })
  .openapi('UpdateLayerRequest')

const UpdateMyUserProfileRequestSchema = z
  .object({
    SshPublicKey: StringSchema.and(
      z.any().openapi({ description: "The user's SSH public key." }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateMyUserProfileRequest', required: [] })
  .openapi('UpdateMyUserProfileRequest')

const UpdateRdsDbInstanceRequestSchema = z
  .object({
    RdsDbInstanceArn: StringSchema.and(
      z.any().openapi({ description: "The Amazon RDS instance's ARN." }),
    ),
    DbUser: StringSchema.and(
      z.any().openapi({ description: 'The master user name.' }),
    ).exactOptional(),
    DbPassword: StringSchema.and(
      z.any().openapi({ description: 'The database password.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['RdsDbInstanceArn'], title: 'UpdateRdsDbInstanceRequest' })
  .openapi('UpdateRdsDbInstanceRequest')

const UpdateStackRequestSchema = z
  .object({
    StackId: StringSchema.and(z.any().openapi({ description: 'The stack ID.' })),
    Name: StringSchema.and(
      z.any().openapi({ description: "The stack's new name." }),
    ).exactOptional(),
    Attributes: StackAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more user-defined key-value pairs to be added to the stack attributes.',
        }),
    ).exactOptional(),
    ServiceRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description: "Do not use this parameter. You cannot update a stack's service role.",
        }),
    ).exactOptional(),
    DefaultInstanceProfileArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of an IAM profile that is the default profile for all of the stack\'s EC2 instances. For more information about IAM ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">Using Identifiers</a>.',
        }),
    ).exactOptional(),
    DefaultOs: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The stack\'s operating system, which must be set to one of the following:</p> <ul> <li> <p>A supported Linux operating system: An Amazon Linux version, such as <code>Amazon Linux 2018.03</code>, <code>Amazon Linux 2017.09</code>, <code>Amazon Linux 2017.03</code>, <code>Amazon Linux 2016.09</code>, <code>Amazon Linux 2016.03</code>, <code>Amazon Linux 2015.09</code>, or <code>Amazon Linux 2015.03</code>.</p> </li> <li> <p>A supported Ubuntu operating system, such as <code>Ubuntu 16.04 LTS</code>, <code>Ubuntu 14.04 LTS</code>, or <code>Ubuntu 12.04 LTS</code>.</p> </li> <li> <p> <code>CentOS Linux 7</code> </p> </li> <li> <p> <code>Red Hat Enterprise Linux 7</code> </p> </li> <li> <p>A supported Windows operating system, such as <code>Microsoft Windows Server 2012 R2 Base</code>, <code>Microsoft Windows Server 2012 R2 with SQL Server Express</code>, <code>Microsoft Windows Server 2012 R2 with SQL Server Standard</code>, or <code>Microsoft Windows Server 2012 R2 with SQL Server Web</code>.</p> </li> <li> <p>A custom AMI: <code>Custom</code>. You specify the custom AMI you want to use when you create instances. For more information about how to use custom AMIs with OpsWorks, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-custom-ami.html">Using Custom AMIs</a>.</p> </li> </ul> <p>The default option is the stack\'s current operating system. For more information about supported operating systems, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-os.html">AWS OpsWorks Stacks Operating Systems</a>.</p>',
        }),
    ).exactOptional(),
    HostnameTheme: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The stack's new host name theme, with spaces replaced by underscores. The theme is used to generate host names for the stack's instances. By default, <code>HostnameTheme</code> is set to <code>Layer_Dependent</code>, which creates host names by appending integers to the layer's short name. The other themes are:</p> <ul> <li> <p> <code>Baked_Goods</code> </p> </li> <li> <p> <code>Clouds</code> </p> </li> <li> <p> <code>Europe_Cities</code> </p> </li> <li> <p> <code>Fruits</code> </p> </li> <li> <p> <code>Greek_Deities_and_Titans</code> </p> </li> <li> <p> <code>Legendary_creatures_from_Japan</code> </p> </li> <li> <p> <code>Planets_and_Moons</code> </p> </li> <li> <p> <code>Roman_Deities</code> </p> </li> <li> <p> <code>Scottish_Islands</code> </p> </li> <li> <p> <code>US_Cities</code> </p> </li> <li> <p> <code>Wild_Cats</code> </p> </li> </ul> <p>To obtain a generated host name, call <code>GetHostNameSuggestion</code>, which returns a host name based on the current theme.</p>",
        }),
    ).exactOptional(),
    DefaultAvailabilityZone: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The stack\'s default Availability Zone, which must be in the stack\'s region. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a>. If you also specify a value for <code>DefaultSubnetId</code>, the subnet must be in the same zone. For more information, see <a>CreateStack</a>. ',
        }),
    ).exactOptional(),
    DefaultSubnetId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The stack's default VPC subnet ID. This parameter is required if you specify a value for the <code>VpcId</code> parameter. All instances are launched into this subnet unless you specify otherwise when you create the instance. If you also specify a value for <code>DefaultAvailabilityZone</code>, the subnet must be in that zone. For information on default values and when this parameter is required, see the <code>VpcId</code> parameter description. ",
        }),
    ).exactOptional(),
    CustomJson: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A string that contains user-defined, custom JSON. It can be used to override the corresponding default stack configuration JSON values or to pass data to recipes. The string should be in the following format:</p> <p> <code>"{\\"key1\\": \\"value1\\", \\"key2\\": \\"value2\\",...}"</code> </p> <p>For more information about custom JSON, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-json.html">Use Custom JSON to Modify the Stack Configuration Attributes</a>.</p>',
        }),
    ).exactOptional(),
    ConfigurationManager: StackConfigurationManagerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration manager. When you update a stack, we recommend that you use the configuration manager to specify the Chef version: 12, 11.10, or 11.4 for Linux stacks, or 12.2 for Windows stacks. The default value for Linux stacks is currently 12.',
        }),
    ).exactOptional(),
    ChefConfiguration: ChefConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>ChefConfiguration</code> object that specifies whether to enable Berkshelf and the Berkshelf version on Chef 11.10 stacks. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-creating.html">Create a New Stack</a>.',
        }),
    ).exactOptional(),
    UseCustomCookbooks: BooleanSchema.and(
      z.any().openapi({ description: 'Whether the stack uses custom cookbooks.' }),
    ).exactOptional(),
    CustomCookbooksSource: SourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains the information required to retrieve an app or cookbook from a repository. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Adding Apps</a> or <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html">Cookbooks and Recipes</a>.',
        }),
    ).exactOptional(),
    DefaultSshKeyName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A default Amazon EC2 key-pair name. The default value is <code>none</code>. If you specify a key-pair name, AWS OpsWorks Stacks installs the public key on the instance and you can use the private key with an SSH client to log in to the instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-ssh.html"> Using SSH to Communicate with an Instance</a> and <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/security-ssh-access.html"> Managing SSH Access</a>. You can override this setting by specifying a different key pair, or no key pair, when you <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-add.html"> create an instance</a>. ',
        }),
    ).exactOptional(),
    DefaultRootDeviceType: RootDeviceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The default root device type. This value is used by default for all instances in the stack, but you can override it when you create an instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ComponentsAMIs.html#storage-for-the-root-device">Storage for the Root Device</a>.',
        }),
    ).exactOptional(),
    UseOpsworksSecurityGroups: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Whether to associate the AWS OpsWorks Stacks built-in security groups with the stack\'s layers.</p> <p>AWS OpsWorks Stacks provides a standard set of built-in security groups, one for each layer, which are associated with layers by default. <code>UseOpsworksSecurityGroups</code> allows you to provide your own custom security groups instead of using the built-in groups. <code>UseOpsworksSecurityGroups</code> has the following settings: </p> <ul> <li> <p>True - AWS OpsWorks Stacks automatically associates the appropriate built-in security group with each layer (default setting). You can associate additional security groups with a layer after you create it, but you cannot delete the built-in security group.</p> </li> <li> <p>False - AWS OpsWorks Stacks does not associate built-in security groups with layers. You must create appropriate EC2 security groups and associate a security group with each layer that you create. However, you can still manually associate a built-in security group with a layer on. Custom security groups are required only for those layers that need custom settings.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-creating.html">Create a New Stack</a>.</p>',
        }),
    ).exactOptional(),
    AgentVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The default AWS OpsWorks Stacks agent version. You have the following options:</p> <ul> <li> <p>Auto-update - Set this parameter to <code>LATEST</code>. AWS OpsWorks Stacks automatically installs new agent versions on the stack's instances as soon as they are available.</p> </li> <li> <p>Fixed version - Set this parameter to your preferred agent version. To update the agent version, you must edit the stack configuration and specify a new version. AWS OpsWorks Stacks then automatically installs that version on the stack's instances.</p> </li> </ul> <p>The default setting is <code>LATEST</code>. To specify an agent version, you must use the complete version number, not the abbreviated number shown on the console. For a list of available agent version numbers, call <a>DescribeAgentVersions</a>. AgentVersion cannot be set to Chef 12.2.</p> <note> <p>You can also specify an agent version when you create or update an instance, which overrides the stack's default setting.</p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['StackId'], title: 'UpdateStackRequest' })
  .openapi('UpdateStackRequest')

const UpdateUserProfileRequestSchema = z
  .object({
    IamUserArn: StringSchema.and(
      z
        .any()
        .openapi({ description: "The user IAM ARN. This can also be a federated user's ARN." }),
    ),
    SshUsername: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The user's SSH user name. The allowable characters are [a-z], [A-Z], [0-9], '-', and '_'. If the specified name includes other punctuation marks, AWS OpsWorks Stacks removes them. For example, <code>my.name</code> will be changed to <code>myname</code>. If you do not specify an SSH user name, AWS OpsWorks Stacks generates one from the IAM user name. ",
        }),
    ).exactOptional(),
    SshPublicKey: StringSchema.and(
      z.any().openapi({ description: "The user's new SSH public key." }),
    ).exactOptional(),
    AllowSelfManagement: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether users can specify their own SSH public key through the My Settings page. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/security-settingsshkey.html">Managing User Permissions</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['IamUserArn'], title: 'UpdateUserProfileRequest' })
  .openapi('UpdateUserProfileRequest')

const UpdateVolumeRequestSchema = z
  .object({
    VolumeId: StringSchema.and(z.any().openapi({ description: 'The volume ID.' })),
    Name: StringSchema.and(z.any().openapi({ description: 'The new name.' })).exactOptional(),
    MountPoint: StringSchema.and(
      z.any().openapi({ description: 'The new mount point.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['VolumeId'], title: 'UpdateVolumeRequest' })
  .openapi('UpdateVolumeRequest')

const AppAttributesKeysSchema = z
  .enum(['DocumentRoot', 'RailsEnv', 'AutoBundleOnDeploy', 'AwsFlowRubySettings'])
  .openapi('AppAttributesKeys')

const HourSchema = z.string().openapi('Hour')

const LayerAttributesKeysSchema = z
  .enum([
    'EcsClusterArn',
    'EnableHaproxyStats',
    'HaproxyStatsUrl',
    'HaproxyStatsUser',
    'HaproxyStatsPassword',
    'HaproxyHealthCheckUrl',
    'HaproxyHealthCheckMethod',
    'MysqlRootPassword',
    'MysqlRootPasswordUbiquitous',
    'GangliaUrl',
    'GangliaUser',
    'GangliaPassword',
    'MemcachedMemory',
    'NodejsVersion',
    'RubyVersion',
    'RubygemsVersion',
    'ManageBundler',
    'BundlerVersion',
    'RailsStack',
    'PassengerVersion',
    'Jvm',
    'JvmVersion',
    'JvmOptions',
    'JavaAppServer',
    'JavaAppServerVersion',
  ])
  .openapi('LayerAttributesKeys')

const StackAttributesKeysSchema = z.literal('Color').openapi('StackAttributesKeys')

const XAmzContentSha256ParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Content-Sha256',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzDateParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Date', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzAlgorithmParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Algorithm', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzCredentialParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Credential', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSecurityTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Security-Token',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzSignatureParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Signature', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSignedHeadersParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-SignedHeaders',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const HmacSecurityScheme = {
  type: 'apiKey',
  name: 'Authorization',
  in: 'header',
  description: 'Amazon Signature authorization v4',
  'x-amazon-apigateway-authtype': 'awsSigv4',
}

export const postXAmzTargetOpsWorks20130218AssignInstanceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.AssignInstance',
  description:
    '<p>Assign a registered instance to a layer.</p> <ul> <li> <p>You can assign registered on-premises instances to any layer type.</p> </li> <li> <p>You can assign registered Amazon EC2 instances only to custom layers.</p> </li> <li> <p>You cannot use this action with instances that were created with AWS OpsWorks Stacks.</p> </li> </ul> <p> <b>Required Permissions</b>: To use this action, an AWS Identity and Access Management (IAM) user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'AssignInstance',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.AssignInstance')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.AssignInstance'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssignInstanceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218AssignVolumeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.AssignVolume',
  description:
    '<p>Assigns one of the stack\'s registered Amazon EBS volumes to a specified instance. The volume must first be registered with the stack by calling <a>RegisterVolume</a>. After you register the volume, you must call <a>UpdateVolume</a> to specify a mount point before calling <code>AssignVolume</code>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'AssignVolume',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.AssignVolume')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.AssignVolume'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssignVolumeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218AssociateElasticIpRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.AssociateElasticIp',
  description:
    '<p>Associates one of the stack\'s registered Elastic IP addresses with a specified instance. The address must first be registered with the stack by calling <a>RegisterElasticIp</a>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'AssociateElasticIp',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.AssociateElasticIp')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.AssociateElasticIp'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociateElasticIpRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218AttachElasticLoadBalancerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.AttachElasticLoadBalancer',
  description:
    '<p>Attaches an Elastic Load Balancing load balancer to a specified layer. AWS OpsWorks Stacks does not support Application Load Balancer. You can only use Classic Load Balancer with AWS OpsWorks Stacks. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/layers-elb.html">Elastic Load Balancing</a>.</p> <note> <p>You must create the Elastic Load Balancing instance separately, by using the Elastic Load Balancing console, API, or CLI. For more information, see <a href="https://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/Welcome.html"> Elastic Load Balancing Developer Guide</a>.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'AttachElasticLoadBalancer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.AttachElasticLoadBalancer')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.AttachElasticLoadBalancer'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AttachElasticLoadBalancerRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218CloneStackRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.CloneStack',
  description:
    '<p>Creates a clone of a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-cloning.html">Clone a Stack</a>. By default, all parameters are set to the values used by the parent stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'CloneStack',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.CloneStack')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.CloneStack'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CloneStackRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CloneStackResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218CreateAppRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.CreateApp',
  description:
    '<p>Creates an app for a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Creating Apps</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'CreateApp',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.CreateApp')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.CreateApp'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateAppRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAppResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218CreateDeploymentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.CreateDeployment',
  description:
    '<p>Runs deployment or stack commands. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-deploying.html">Deploying Apps</a> and <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-commands.html">Run Stack Commands</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Deploy or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'CreateDeployment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.CreateDeployment')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.CreateDeployment'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateDeploymentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDeploymentResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218CreateInstanceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.CreateInstance',
  description:
    '<p>Creates an instance in a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-add.html">Adding an Instance to a Layer</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'CreateInstance',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.CreateInstance')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.CreateInstance'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateInstanceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateInstanceResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218CreateLayerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.CreateLayer',
  description:
    '<p>Creates a layer. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-create.html">How to Create a Layer</a>.</p> <note> <p>You should use <b>CreateLayer</b> for noncustom layer types such as PHP App Server only if the stack does not have an existing layer of that type. A stack can have at most one instance of each noncustom layer; if you attempt to create a second instance, <b>CreateLayer</b> fails. A stack can have an arbitrary number of custom layers, so you can call <b>CreateLayer</b> as many times as you like for that layer type.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'CreateLayer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.CreateLayer')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.CreateLayer'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateLayerRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateLayerResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218CreateStackRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.CreateStack',
  description:
    '<p>Creates a new stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-edit.html">Create a New Stack</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'CreateStack',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.CreateStack')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.CreateStack'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateStackRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateStackResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218CreateUserProfileRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.CreateUserProfile',
  description:
    '<p>Creates a new user profile.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'CreateUserProfile',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.CreateUserProfile')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.CreateUserProfile'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateUserProfileRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateUserProfileResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218DeleteAppRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.DeleteApp',
  description:
    '<p>Deletes a specified app.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'DeleteApp',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.DeleteApp')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.DeleteApp'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteAppRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218DeleteInstanceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.DeleteInstance',
  description:
    '<p>Deletes a specified instance, which terminates the associated Amazon EC2 instance. You must stop an instance before you can delete it.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-delete.html">Deleting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'DeleteInstance',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.DeleteInstance')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.DeleteInstance'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteInstanceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218DeleteLayerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.DeleteLayer',
  description:
    '<p>Deletes a specified layer. You must first stop and then delete all associated instances or unassign registered instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-delete.html">How to Delete a Layer</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'DeleteLayer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.DeleteLayer')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.DeleteLayer'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteLayerRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218DeleteStackRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.DeleteStack',
  description:
    '<p>Deletes a specified stack. You must first delete all instances, layers, and apps or deregister registered instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-shutting.html">Shut Down a Stack</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'DeleteStack',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.DeleteStack')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.DeleteStack'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteStackRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218DeleteUserProfileRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.DeleteUserProfile',
  description:
    '<p>Deletes a user profile.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'DeleteUserProfile',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.DeleteUserProfile')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.DeleteUserProfile'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteUserProfileRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218DeregisterEcsClusterRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.DeregisterEcsCluster',
  description:
    '<p>Deregisters a specified Amazon ECS cluster from a stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-ecscluster.html#workinglayers-ecscluster-delete"> Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html</a>.</p>',
  operationId: 'DeregisterEcsCluster',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.DeregisterEcsCluster')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.DeregisterEcsCluster'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeregisterEcsClusterRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218DeregisterElasticIpRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.DeregisterElasticIp',
  description:
    '<p>Deregisters a specified Elastic IP address. The address can then be registered by another stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'DeregisterElasticIp',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.DeregisterElasticIp')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.DeregisterElasticIp'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeregisterElasticIpRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218DeregisterInstanceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.DeregisterInstance',
  description:
    '<p>Deregister a registered Amazon EC2 or on-premises instance. This action removes the instance from the stack and returns it to your control. This action cannot be used with instances that were created with AWS OpsWorks Stacks.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'DeregisterInstance',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.DeregisterInstance')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.DeregisterInstance'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeregisterInstanceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218DeregisterRdsDbInstanceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.DeregisterRdsDbInstance',
  description:
    '<p>Deregisters an Amazon RDS instance.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'DeregisterRdsDbInstance',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.DeregisterRdsDbInstance')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.DeregisterRdsDbInstance'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeregisterRdsDbInstanceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218DeregisterVolumeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.DeregisterVolume',
  description:
    '<p>Deregisters an Amazon EBS volume. The volume can then be registered by another stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'DeregisterVolume',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.DeregisterVolume')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.DeregisterVolume'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeregisterVolumeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218DescribeAgentVersionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.DescribeAgentVersions',
  description:
    'Describes the available AWS OpsWorks Stacks agent versions. You must specify a stack ID or a configuration manager. <code>DescribeAgentVersions</code> returns a list of available agent versions for the specified stack or configuration manager.',
  operationId: 'DescribeAgentVersions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.DescribeAgentVersions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.DescribeAgentVersions'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeAgentVersionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAgentVersionsResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218DescribeAppsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.DescribeApps',
  description:
    '<p>Requests a description of a specified set of apps.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'DescribeApps',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.DescribeApps')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.DescribeApps'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeAppsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAppsResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218DescribeCommandsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.DescribeCommands',
  description:
    '<p>Describes the results of specified commands.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'DescribeCommands',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.DescribeCommands')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.DescribeCommands'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeCommandsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeCommandsResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218DescribeDeploymentsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.DescribeDeployments',
  description:
    '<p>Requests a description of a specified set of deployments.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'DescribeDeployments',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.DescribeDeployments')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.DescribeDeployments'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeDeploymentsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeDeploymentsResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218DescribeEcsClustersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.DescribeEcsClusters',
  description:
    '<p>Describes Amazon ECS clusters that are registered with a stack. If you specify only a stack ID, you can use the <code>MaxResults</code> and <code>NextToken</code> parameters to paginate the response. However, AWS OpsWorks Stacks currently supports only one cluster per layer, so the result set has a maximum of one element.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack or an attached policy that explicitly grants permission. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p> <p>This call accepts only one resource-identifying parameter.</p>',
  operationId: 'DescribeEcsClusters',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.DescribeEcsClusters')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.DescribeEcsClusters'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeEcsClustersRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeEcsClustersResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218DescribeElasticIpsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.DescribeElasticIps',
  description:
    '<p>Describes <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP addresses</a>.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'DescribeElasticIps',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.DescribeElasticIps')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.DescribeElasticIps'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeElasticIpsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeElasticIpsResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218DescribeElasticLoadBalancersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.DescribeElasticLoadBalancers',
  description:
    '<p>Describes a stack\'s Elastic Load Balancing instances.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'DescribeElasticLoadBalancers',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.DescribeElasticLoadBalancers')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.DescribeElasticLoadBalancers'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeElasticLoadBalancersRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeElasticLoadBalancersResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218DescribeInstancesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.DescribeInstances',
  description:
    '<p>Requests a description of a set of instances.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'DescribeInstances',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.DescribeInstances')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.DescribeInstances'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeInstancesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeInstancesResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218DescribeLayersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.DescribeLayers',
  description:
    '<p>Requests a description of one or more layers in a specified stack.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'DescribeLayers',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.DescribeLayers')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.DescribeLayers'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeLayersRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeLayersResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218DescribeLoadBasedAutoScalingRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.DescribeLoadBasedAutoScaling',
  description:
    '<p>Describes load-based auto scaling configurations for specified layers.</p> <note> <p>You must specify at least one of the parameters.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'DescribeLoadBasedAutoScaling',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.DescribeLoadBasedAutoScaling')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.DescribeLoadBasedAutoScaling'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeLoadBasedAutoScalingRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeLoadBasedAutoScalingResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218DescribeMyUserProfileRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.DescribeMyUserProfile',
  description:
    '<p>Describes a user\'s SSH information.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have self-management enabled or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'DescribeMyUserProfile',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.DescribeMyUserProfile')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.DescribeMyUserProfile'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeMyUserProfileResultSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218DescribeOperatingSystemsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.DescribeOperatingSystems',
  description: 'Describes the operating systems that are supported by AWS OpsWorks Stacks.',
  operationId: 'DescribeOperatingSystems',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.DescribeOperatingSystems')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.DescribeOperatingSystems'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeOperatingSystemsResponseSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218DescribePermissionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.DescribePermissions',
  description:
    '<p>Describes the permissions for a specified stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'DescribePermissions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.DescribePermissions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.DescribePermissions'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribePermissionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribePermissionsResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218DescribeRaidArraysRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.DescribeRaidArrays',
  description:
    '<p>Describe an instance\'s RAID arrays.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'DescribeRaidArrays',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.DescribeRaidArrays')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.DescribeRaidArrays'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeRaidArraysRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeRaidArraysResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218DescribeRdsDbInstancesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.DescribeRdsDbInstances',
  description:
    '<p>Describes Amazon RDS instances.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p> <p>This call accepts only one resource-identifying parameter.</p>',
  operationId: 'DescribeRdsDbInstances',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.DescribeRdsDbInstances')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.DescribeRdsDbInstances'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeRdsDbInstancesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeRdsDbInstancesResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218DescribeServiceErrorsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.DescribeServiceErrors',
  description:
    '<p>Describes AWS OpsWorks Stacks service errors.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p> <p>This call accepts only one resource-identifying parameter.</p>',
  operationId: 'DescribeServiceErrors',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.DescribeServiceErrors')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.DescribeServiceErrors'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeServiceErrorsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeServiceErrorsResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218DescribeStackProvisioningParametersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.DescribeStackProvisioningParameters',
  description:
    '<p>Requests a description of a stack\'s provisioning parameters.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'DescribeStackProvisioningParameters',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.DescribeStackProvisioningParameters')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['OpsWorks_20130218.DescribeStackProvisioningParameters'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeStackProvisioningParametersRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeStackProvisioningParametersResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218DescribeStackSummaryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.DescribeStackSummary',
  description:
    '<p>Describes the number of layers and apps in a specified stack, and the number of instances in each state, such as <code>running_setup</code> or <code>online</code>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'DescribeStackSummary',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.DescribeStackSummary')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.DescribeStackSummary'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeStackSummaryRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeStackSummaryResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218DescribeStacksRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.DescribeStacks',
  description:
    '<p>Requests a description of one or more stacks.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'DescribeStacks',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.DescribeStacks')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.DescribeStacks'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeStacksRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeStacksResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218DescribeTimeBasedAutoScalingRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.DescribeTimeBasedAutoScaling',
  description:
    '<p>Describes time-based auto scaling configurations for specified instances.</p> <note> <p>You must specify at least one of the parameters.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'DescribeTimeBasedAutoScaling',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.DescribeTimeBasedAutoScaling')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.DescribeTimeBasedAutoScaling'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeTimeBasedAutoScalingRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeTimeBasedAutoScalingResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218DescribeUserProfilesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.DescribeUserProfiles',
  description:
    '<p>Describe specified users.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'DescribeUserProfiles',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.DescribeUserProfiles')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.DescribeUserProfiles'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeUserProfilesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeUserProfilesResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218DescribeVolumesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.DescribeVolumes',
  description:
    '<p>Describes an instance\'s Amazon EBS volumes.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'DescribeVolumes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.DescribeVolumes')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.DescribeVolumes'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeVolumesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeVolumesResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218DetachElasticLoadBalancerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.DetachElasticLoadBalancer',
  description:
    '<p>Detaches a specified Elastic Load Balancing instance from its layer.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'DetachElasticLoadBalancer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.DetachElasticLoadBalancer')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.DetachElasticLoadBalancer'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DetachElasticLoadBalancerRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218DisassociateElasticIpRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.DisassociateElasticIp',
  description:
    '<p>Disassociates an Elastic IP address from its instance. The address remains registered with the stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'DisassociateElasticIp',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.DisassociateElasticIp')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.DisassociateElasticIp'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisassociateElasticIpRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218GetHostnameSuggestionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.GetHostnameSuggestion',
  description:
    '<p>Gets a generated host name for the specified layer, based on the current host name theme.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'GetHostnameSuggestion',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.GetHostnameSuggestion')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.GetHostnameSuggestion'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetHostnameSuggestionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetHostnameSuggestionResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218GrantAccessRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.GrantAccess',
  description:
    '<note> <p>This action can be used only with Windows stacks.</p> </note> <p>Grants RDP access to a Windows instance for a specified time period.</p>',
  operationId: 'GrantAccess',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.GrantAccess')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.GrantAccess'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GrantAccessRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GrantAccessResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218ListTagsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.ListTags',
  description: 'Returns a list of tags that are applied to the specified stack or layer.',
  operationId: 'ListTags',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.ListTags')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.ListTags'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListTagsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218RebootInstanceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.RebootInstance',
  description:
    '<p>Reboots a specified instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html">Starting, Stopping, and Rebooting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'RebootInstance',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.RebootInstance')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.RebootInstance'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RebootInstanceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218RegisterEcsClusterRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.RegisterEcsCluster',
  description:
    '<p>Registers a specified Amazon ECS cluster with a stack. You can register only one cluster with a stack. A cluster can be registered with only one stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-ecscluster.html"> Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html"> Managing User Permissions</a>.</p>',
  operationId: 'RegisterEcsCluster',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.RegisterEcsCluster')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.RegisterEcsCluster'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RegisterEcsClusterRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RegisterEcsClusterResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218RegisterElasticIpRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.RegisterElasticIp',
  description:
    '<p>Registers an Elastic IP address with a specified stack. An address can be registered with only one stack at a time. If the address is already registered, you must first deregister it by calling <a>DeregisterElasticIp</a>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'RegisterElasticIp',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.RegisterElasticIp')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.RegisterElasticIp'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RegisterElasticIpRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RegisterElasticIpResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218RegisterInstanceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.RegisterInstance',
  description:
    '<p>Registers instances that were created outside of AWS OpsWorks Stacks with a specified stack.</p> <note> <p>We do not recommend using this action to register instances. The complete registration operation includes two tasks: installing the AWS OpsWorks Stacks agent on the instance, and registering the instance with the stack. <code>RegisterInstance</code> handles only the second step. You should instead use the AWS CLI <code>register</code> command, which performs the entire registration operation. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/registered-instances-register.html"> Registering an Instance with an AWS OpsWorks Stacks Stack</a>.</p> </note> <p>Registered instances have the same requirements as instances that are created by using the <a>CreateInstance</a> API. For example, registered instances must be running a supported Linux-based operating system, and they must have a supported instance type. For more information about requirements for instances that you want to register, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/registered-instances-register-registering-preparer.html"> Preparing the Instance</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'RegisterInstance',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.RegisterInstance')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.RegisterInstance'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RegisterInstanceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RegisterInstanceResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218RegisterRdsDbInstanceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.RegisterRdsDbInstance',
  description:
    '<p>Registers an Amazon RDS instance with a stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'RegisterRdsDbInstance',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.RegisterRdsDbInstance')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.RegisterRdsDbInstance'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RegisterRdsDbInstanceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218RegisterVolumeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.RegisterVolume',
  description:
    '<p>Registers an Amazon EBS volume with a specified stack. A volume can be registered with only one stack at a time. If the volume is already registered, you must first deregister it by calling <a>DeregisterVolume</a>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'RegisterVolume',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.RegisterVolume')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.RegisterVolume'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RegisterVolumeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RegisterVolumeResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218SetLoadBasedAutoScalingRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.SetLoadBasedAutoScaling',
  description:
    '<p>Specify the load-based auto scaling configuration for a specified layer. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-autoscaling.html">Managing Load with Time-based and Load-based Instances</a>.</p> <note> <p>To use load-based auto scaling, you must create a set of load-based auto scaling instances. Load-based auto scaling operates only on the instances from that set, so you must ensure that you have created enough instances to handle the maximum anticipated load.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'SetLoadBasedAutoScaling',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.SetLoadBasedAutoScaling')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.SetLoadBasedAutoScaling'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SetLoadBasedAutoScalingRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218SetPermissionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.SetPermission',
  description:
    '<p>Specifies a user\'s permissions. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingsecurity.html">Security and Permissions</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'SetPermission',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.SetPermission')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.SetPermission'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SetPermissionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218SetTimeBasedAutoScalingRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.SetTimeBasedAutoScaling',
  description:
    '<p>Specify the time-based auto scaling configuration for a specified instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-autoscaling.html">Managing Load with Time-based and Load-based Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'SetTimeBasedAutoScaling',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.SetTimeBasedAutoScaling')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.SetTimeBasedAutoScaling'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SetTimeBasedAutoScalingRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218StartInstanceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.StartInstance',
  description:
    '<p>Starts a specified instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html">Starting, Stopping, and Rebooting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'StartInstance',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.StartInstance')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.StartInstance'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartInstanceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218StartStackRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.StartStack',
  description:
    '<p>Starts a stack\'s instances.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'StartStack',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.StartStack')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.StartStack'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: StartStackRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218StopInstanceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.StopInstance',
  description:
    '<p>Stops a specified instance. When you stop a standard instance, the data disappears and must be reinstalled when you restart the instance. You can stop an Amazon EBS-backed instance without losing data. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html">Starting, Stopping, and Rebooting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'StopInstance',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.StopInstance')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.StopInstance'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopInstanceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218StopStackRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.StopStack',
  description:
    '<p>Stops a specified stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'StopStack',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.StopStack')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.StopStack'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: StopStackRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218TagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.TagResource',
  description:
    'Apply cost-allocation tags to a specified stack or layer in AWS OpsWorks Stacks. For more information about how tagging works, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/tagging.html">Tags</a> in the AWS OpsWorks User Guide.',
  operationId: 'TagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.TagResource'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TagResourceRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218UnassignInstanceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.UnassignInstance',
  description:
    '<p>Unassigns a registered instance from all layers that are using the instance. The instance remains in the stack as an unassigned instance, and can be assigned to another layer as needed. You cannot use this action with instances that were created with AWS OpsWorks Stacks.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'UnassignInstance',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.UnassignInstance')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.UnassignInstance'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UnassignInstanceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218UnassignVolumeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.UnassignVolume',
  description:
    '<p>Unassigns an assigned Amazon EBS volume. The volume remains registered with the stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'UnassignVolume',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.UnassignVolume')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.UnassignVolume'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UnassignVolumeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218UntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.UntagResource',
  description: 'Removes tags from a specified stack or layer.',
  operationId: 'UntagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.UntagResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UntagResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218UpdateAppRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.UpdateApp',
  description:
    '<p>Updates a specified app.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Deploy or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'UpdateApp',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.UpdateApp')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.UpdateApp'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateAppRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218UpdateElasticIpRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.UpdateElasticIp',
  description:
    '<p>Updates a registered Elastic IP address\'s name. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'UpdateElasticIp',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.UpdateElasticIp')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.UpdateElasticIp'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateElasticIpRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218UpdateInstanceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.UpdateInstance',
  description:
    '<p>Updates a specified instance.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'UpdateInstance',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.UpdateInstance')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.UpdateInstance'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateInstanceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218UpdateLayerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.UpdateLayer',
  description:
    '<p>Updates a specified layer.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'UpdateLayer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.UpdateLayer')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.UpdateLayer'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateLayerRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218UpdateMyUserProfileRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.UpdateMyUserProfile',
  description:
    '<p>Updates a user\'s SSH public key.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have self-management enabled or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'UpdateMyUserProfile',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.UpdateMyUserProfile')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.UpdateMyUserProfile'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateMyUserProfileRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218UpdateRdsDbInstanceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.UpdateRdsDbInstance',
  description:
    '<p>Updates an Amazon RDS instance.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'UpdateRdsDbInstance',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.UpdateRdsDbInstance')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.UpdateRdsDbInstance'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateRdsDbInstanceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218UpdateStackRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.UpdateStack',
  description:
    '<p>Updates a specified stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'UpdateStack',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.UpdateStack')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.UpdateStack'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateStackRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218UpdateUserProfileRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.UpdateUserProfile',
  description:
    '<p>Updates a specified user profile.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'UpdateUserProfile',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.UpdateUserProfile')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.UpdateUserProfile'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateUserProfileRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorks20130218UpdateVolumeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorks_20130218.UpdateVolume',
  description:
    '<p>Updates an Amazon EBS volume\'s name or mount point. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>',
  operationId: 'UpdateVolume',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OpsWorks_20130218.UpdateVolume')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorks_20130218.UpdateVolume'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateVolumeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})
