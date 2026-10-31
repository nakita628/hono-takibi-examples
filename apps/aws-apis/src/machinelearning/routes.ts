import { createRoute, z } from '@hono/zod-openapi'

const EntityIdSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.-]+/)
  .min(1)
  .max(64)
  .openapi('EntityId')

const TaggableResourceTypeSchema = z
  .enum(['BatchPrediction', 'DataSource', 'Evaluation', 'MLModel'])
  .openapi('TaggableResourceType')

const AddTagsOutputSchema = z
  .object({
    ResourceId: EntityIdSchema.and(
      z.any().openapi({ description: 'The ID of the ML object that was tagged.' }),
    ).exactOptional(),
    ResourceType: TaggableResourceTypeSchema.and(
      z.any().openapi({ description: 'The type of the ML object that was tagged.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Amazon ML returns the following elements.', required: [] })
  .openapi('AddTagsOutput')

const TagKeySchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(128)
  .openapi('TagKey')

const TagValueSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(0)
  .max(256)
  .openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the tag. Valid characters include Unicode letters, digits, white space, _, ., /, =, +, -, %, and @.',
        }),
    ).exactOptional(),
    Value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional string, typically used to describe or define the tag. Valid characters include Unicode letters, digits, white space, _, ., /, =, +, -, %, and @.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A custom key-value pair associated with an ML object, such as an ML model.',
    required: [],
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).max(100).openapi('TagList')

const AddTagsInputSchema = z
  .object({
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The key-value pairs to use to create tags. If you specify a key without specifying a value, Amazon ML creates a tag with the specified key and a value of null.',
        }),
    ),
    ResourceId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the ML object to tag. For example, <code>exampleModelId</code>.',
        }),
    ),
    ResourceType: TaggableResourceTypeSchema.and(
      z.any().openapi({ description: 'The type of the ML object to tag.' }),
    ),
  })
  .openapi({ required: ['Tags', 'ResourceId', 'ResourceType'], title: 'AddTagsInput' })
  .openapi('AddTagsInput')

const InvalidInputExceptionSchema = z.any().openapi('InvalidInputException')

const InvalidTagExceptionSchema = z.any().openapi('InvalidTagException')

const TagLimitExceededExceptionSchema = z.any().openapi('TagLimitExceededException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const CreateBatchPredictionOutputSchema = z
  .object({
    BatchPredictionId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A user-supplied ID that uniquely identifies the <code>BatchPrediction</code>. This value is identical to the value of the <code>BatchPredictionId</code> in the request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p> Represents the output of a <code>CreateBatchPrediction</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateBatchPrediction</code> operation is asynchronous. You can poll for status updates by using the <code>&gt;GetBatchPrediction</code> operation and checking the <code>Status</code> parameter of the result. </p>',
    required: [],
  })
  .openapi('CreateBatchPredictionOutput')

const EntityNameSchema = z
  .string()
  .regex(/.*\S.*|^$/)
  .max(1024)
  .openapi({ description: 'A user-supplied name or description of the Amazon ML resource.' })
  .openapi('EntityName')

const S3UrlSchema = z
  .string()
  .regex(/s3:\/\/([^\/]+)(\/.*)?/)
  .max(2048)
  .openapi({
    description: 'A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).',
  })
  .openapi('S3Url')

const CreateBatchPredictionInputSchema = z
  .object({
    BatchPredictionId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A user-supplied ID that uniquely identifies the <code>BatchPrediction</code>.',
        }),
    ),
    BatchPredictionName: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A user-supplied name or description of the <code>BatchPrediction</code>. <code>BatchPredictionName</code> can only use the UTF-8 character set.',
        }),
    ).exactOptional(),
    MLModelId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the <code>MLModel</code> that will generate predictions for the group of observations. ',
        }),
    ),
    BatchPredictionDataSourceId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the <code>DataSource</code> that points to the group of observations to predict.',
        }),
    ),
    OutputUri: S3UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The location of an Amazon Simple Storage Service (Amazon S3) bucket or directory to store the batch prediction results. The following substrings are not allowed in the <code>s3 key</code> portion of the <code>outputURI</code> field: ':', '//', '/./', '/../'.</p> <p>Amazon ML needs permissions to store and retrieve the logs on your behalf. For information about how to set permissions, see the <a href=\"https://docs.aws.amazon.com/machine-learning/latest/dg\">Amazon Machine Learning Developer Guide</a>.</p>",
        }),
    ),
  })
  .openapi({
    required: ['BatchPredictionId', 'MLModelId', 'BatchPredictionDataSourceId', 'OutputUri'],
    title: 'CreateBatchPredictionInput',
  })
  .openapi('CreateBatchPredictionInput')

const IdempotentParameterMismatchExceptionSchema = z
  .any()
  .openapi('IdempotentParameterMismatchException')

const CreateDataSourceFromRDSOutputSchema = z
  .object({
    DataSourceId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A user-supplied ID that uniquely identifies the datasource. This value should be identical to the value of the <code>DataSourceID</code> in the request. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p> Represents the output of a <code>CreateDataSourceFromRDS</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateDataSourceFromRDS</code>&gt; operation is asynchronous. You can poll for updates by using the <code>GetBatchPrediction</code> operation and checking the <code>Status</code> parameter. You can inspect the <code>Message</code> when <code>Status</code> shows up as <code>FAILED</code>. You can also check the progress of the copy operation by going to the <code>DataPipeline</code> console and looking up the pipeline using the <code>pipelineId </code> from the describe call.</p>',
    required: [],
  })
  .openapi('CreateDataSourceFromRDSOutput')

const RDSInstanceIdentifierSchema = z
  .string()
  .regex(/[a-z0-9-]+/)
  .min(1)
  .max(63)
  .openapi({ description: 'Identifier of RDS DB Instances.' })
  .openapi('RDSInstanceIdentifier')

const RDSDatabaseNameSchema = z
  .string()
  .min(1)
  .max(64)
  .openapi({ description: 'The name of a database hosted on an RDS DB instance.' })
  .openapi('RDSDatabaseName')

const RDSDatabaseSchema = z
  .object({
    InstanceIdentifier: RDSInstanceIdentifierSchema.and(
      z.any().openapi({ description: 'The ID of an RDS DB instance.' }),
    ),
    DatabaseName: RDSDatabaseNameSchema,
  })
  .openapi({
    required: ['InstanceIdentifier', 'DatabaseName'],
    description: 'The database details of an Amazon RDS database.',
  })
  .openapi('RDSDatabase')

const RDSSelectSqlQuerySchema = z
  .string()
  .min(1)
  .max(16777216)
  .openapi({
    description:
      'The SQL query to be executed against the Amazon RDS database. The SQL query should be valid for the Amazon RDS type being used.',
  })
  .openapi('RDSSelectSqlQuery')

const RDSDatabaseUsernameSchema = z
  .string()
  .min(1)
  .max(128)
  .openapi({
    description:
      'The username to be used by Amazon ML to connect to database on an Amazon RDS instance. The username should have sufficient permissions to execute an <code>RDSSelectSqlQuery</code> query.',
  })
  .openapi('RDSDatabaseUsername')

const RDSDatabasePasswordSchema = z
  .string()
  .min(8)
  .max(128)
  .openapi({
    description:
      'The password to be used by Amazon ML to connect to a database on an RDS DB instance. The password should have sufficient permissions to execute the <code>RDSSelectQuery</code> query.',
  })
  .openapi('RDSDatabasePassword')

const RDSDatabaseCredentialsSchema = z
  .object({ Username: RDSDatabaseUsernameSchema, Password: RDSDatabasePasswordSchema })
  .openapi({
    required: ['Username', 'Password'],
    description: 'The database credentials to connect to a database on an RDS DB instance.',
  })
  .openapi('RDSDatabaseCredentials')

const DataRearrangementSchema = z.string().openapi('DataRearrangement')

const DataSchemaSchema = z
  .string()
  .max(131071)
  .openapi({
    description:
      '<p>The schema of a <code>DataSource</code>. The <code>DataSchema</code> defines the structure of the observation data in the data file(s) referenced in the <code>DataSource</code>. The DataSource schema is expressed in JSON format.</p> <p> <code>DataSchema</code> is not required if you specify a <code>DataSchemaUri</code> </p> <p>{ "version": "1.0", "recordAnnotationFieldName": "F1", "recordWeightFieldName": "F2", "targetFieldName": "F3", "dataFormat": "CSV", "dataFileContainsHeader": true, "variables": [ { "fieldName": "F1", "fieldType": "TEXT" }, { "fieldName": "F2", "fieldType": "NUMERIC" }, { "fieldName": "F3", "fieldType": "CATEGORICAL" }, { "fieldName": "F4", "fieldType": "NUMERIC" }, { "fieldName": "F5", "fieldType": "CATEGORICAL" }, { "fieldName": "F6", "fieldType": "TEXT" }, { "fieldName": "F7", "fieldType": "WEIGHTED_INT_SEQUENCE" }, { "fieldName": "F8", "fieldType": "WEIGHTED_STRING_SEQUENCE" } ], "excludedVariableNames": [ "F6" ] }</p>',
  })
  .openapi('DataSchema')

const EDPResourceRoleSchema = z.string().min(1).max(64).openapi('EDPResourceRole')

const EDPServiceRoleSchema = z.string().min(1).max(64).openapi('EDPServiceRole')

const EDPSubnetIdSchema = z.string().min(1).max(255).openapi('EDPSubnetId')

const EDPSecurityGroupIdSchema = z.string().min(1).max(255).openapi('EDPSecurityGroupId')

const EDPSecurityGroupIdsSchema = z.array(EDPSecurityGroupIdSchema).openapi('EDPSecurityGroupIds')

const RDSDataSpecSchema = z
  .object({
    DatabaseInformation: RDSDatabaseSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the <code>DatabaseName</code> and <code>InstanceIdentifier</code> of an Amazon RDS database.',
        }),
    ),
    SelectSqlQuery: RDSSelectSqlQuerySchema.and(
      z
        .any()
        .openapi({
          description:
            'The query that is used to retrieve the observation data for the <code>DataSource</code>.',
        }),
    ),
    DatabaseCredentials: RDSDatabaseCredentialsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The AWS Identity and Access Management (IAM) credentials that are used connect to the Amazon RDS database.',
        }),
    ),
    S3StagingLocation: S3UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 location for staging Amazon RDS data. The data retrieved from Amazon RDS using <code>SelectSqlQuery</code> is stored in this location.',
        }),
    ),
    DataRearrangement: DataRearrangementSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A JSON string that represents the splitting and rearrangement processing to be applied to a <code>DataSource</code>. If the <code>DataRearrangement</code> parameter is not provided, all of the input data is used to create the <code>Datasource</code>.</p> <p>There are multiple parameters that control what data is used to create a datasource:</p> <ul> <li> <p> <b> <code>percentBegin</code> </b> </p> <p>Use <code>percentBegin</code> to indicate the beginning of the range of the data used to create the Datasource. If you do not include <code>percentBegin</code> and <code>percentEnd</code>, Amazon ML includes all of the data when creating the datasource.</p> </li> <li> <p> <b> <code>percentEnd</code> </b> </p> <p>Use <code>percentEnd</code> to indicate the end of the range of the data used to create the Datasource. If you do not include <code>percentBegin</code> and <code>percentEnd</code>, Amazon ML includes all of the data when creating the datasource.</p> </li> <li> <p> <b> <code>complement</code> </b> </p> <p>The <code>complement</code> parameter instructs Amazon ML to use the data that is not included in the range of <code>percentBegin</code> to <code>percentEnd</code> to create a datasource. The <code>complement</code> parameter is useful if you need to create complementary datasources for training and evaluation. To create a complementary datasource, use the same values for <code>percentBegin</code> and <code>percentEnd</code>, along with the <code>complement</code> parameter.</p> <p>For example, the following two datasources do not share any data, and can be used to train and evaluate a model. The first datasource has 25 percent of the data, and the second one has 75 percent of the data.</p> <p>Datasource for evaluation: <code>{"splitting":{"percentBegin":0, "percentEnd":25}}</code> </p> <p>Datasource for training: <code>{"splitting":{"percentBegin":0, "percentEnd":25, "complement":"true"}}</code> </p> </li> <li> <p> <b> <code>strategy</code> </b> </p> <p>To change how Amazon ML splits the data for a datasource, use the <code>strategy</code> parameter.</p> <p>The default value for the <code>strategy</code> parameter is <code>sequential</code>, meaning that Amazon ML takes all of the data records between the <code>percentBegin</code> and <code>percentEnd</code> parameters for the datasource, in the order that the records appear in the input data.</p> <p>The following two <code>DataRearrangement</code> lines are examples of sequentially ordered training and evaluation datasources:</p> <p>Datasource for evaluation: <code>{"splitting":{"percentBegin":70, "percentEnd":100, "strategy":"sequential"}}</code> </p> <p>Datasource for training: <code>{"splitting":{"percentBegin":70, "percentEnd":100, "strategy":"sequential", "complement":"true"}}</code> </p> <p>To randomly split the input data into the proportions indicated by the percentBegin and percentEnd parameters, set the <code>strategy</code> parameter to <code>random</code> and provide a string that is used as the seed value for the random data splitting (for example, you can use the S3 path to your data as the random seed string). If you choose the random split strategy, Amazon ML assigns each row of data a pseudo-random number between 0 and 100, and then selects the rows that have an assigned number between <code>percentBegin</code> and <code>percentEnd</code>. Pseudo-random numbers are assigned using both the input seed string value and the byte offset as a seed, so changing the data results in a different split. Any existing ordering is preserved. The random splitting strategy ensures that variables in the training and evaluation data are distributed similarly. It is useful in the cases where the input data may have an implicit sort order, which would otherwise result in training and evaluation datasources containing non-similar data records.</p> <p>The following two <code>DataRearrangement</code> lines are examples of non-sequentially ordered training and evaluation datasources:</p> <p>Datasource for evaluation: <code>{"splitting":{"percentBegin":70, "percentEnd":100, "strategy":"random", "randomSeed"="s3://my_s3_path/bucket/file.csv"}}</code> </p> <p>Datasource for training: <code>{"splitting":{"percentBegin":70, "percentEnd":100, "strategy":"random", "randomSeed"="s3://my_s3_path/bucket/file.csv", "complement":"true"}}</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    DataSchema: DataSchemaSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A JSON string that represents the schema for an Amazon RDS <code>DataSource</code>. The <code>DataSchema</code> defines the structure of the observation data in the data file(s) referenced in the <code>DataSource</code>.</p> <p>A <code>DataSchema</code> is not required if you specify a <code>DataSchemaUri</code> </p> <p>Define your <code>DataSchema</code> as a series of key-value pairs. <code>attributes</code> and <code>excludedVariableNames</code> have an array of key-value pairs for their value. Use the following format to define your <code>DataSchema</code>.</p> <p>{ "version": "1.0",</p> <p>"recordAnnotationFieldName": "F1",</p> <p>"recordWeightFieldName": "F2",</p> <p>"targetFieldName": "F3",</p> <p>"dataFormat": "CSV",</p> <p>"dataFileContainsHeader": true,</p> <p>"attributes": [</p> <p>{ "fieldName": "F1", "fieldType": "TEXT" }, { "fieldName": "F2", "fieldType": "NUMERIC" }, { "fieldName": "F3", "fieldType": "CATEGORICAL" }, { "fieldName": "F4", "fieldType": "NUMERIC" }, { "fieldName": "F5", "fieldType": "CATEGORICAL" }, { "fieldName": "F6", "fieldType": "TEXT" }, { "fieldName": "F7", "fieldType": "WEIGHTED_INT_SEQUENCE" }, { "fieldName": "F8", "fieldType": "WEIGHTED_STRING_SEQUENCE" } ],</p> <p>"excludedVariableNames": [ "F6" ] }</p>',
        }),
    ).exactOptional(),
    DataSchemaUri: S3UrlSchema.and(
      z.any().openapi({ description: 'The Amazon S3 location of the <code>DataSchema</code>. ' }),
    ).exactOptional(),
    ResourceRole: EDPResourceRoleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The role (DataPipelineDefaultResourceRole) assumed by an Amazon Elastic Compute Cloud (Amazon EC2) instance to carry out the copy operation from Amazon RDS to an Amazon S3 task. For more information, see <a href="https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-roles.html">Role templates</a> for data pipelines.',
        }),
    ),
    ServiceRole: EDPServiceRoleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The role (DataPipelineDefaultRole) assumed by AWS Data Pipeline service to monitor the progress of the copy task from Amazon RDS to Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-roles.html">Role templates</a> for data pipelines.',
        }),
    ),
    SubnetId: EDPSubnetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The subnet ID to be used to access a VPC-based RDS DB instance. This attribute is used by Data Pipeline to carry out the copy task from Amazon RDS to Amazon S3.',
        }),
    ),
    SecurityGroupIds: EDPSecurityGroupIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The security group IDs to be used to access a VPC-based RDS DB instance. Ensure that there are appropriate ingress rules set up to allow access to the RDS DB instance. This attribute is used by Data Pipeline to carry out the copy operation from Amazon RDS to an Amazon S3 task.',
        }),
    ),
  })
  .openapi({
    required: [
      'DatabaseInformation',
      'SelectSqlQuery',
      'DatabaseCredentials',
      'S3StagingLocation',
      'ResourceRole',
      'ServiceRole',
      'SubnetId',
      'SecurityGroupIds',
    ],
    description:
      'The data specification of an Amazon Relational Database Service (Amazon RDS) <code>DataSource</code>.',
  })
  .openapi('RDSDataSpec')

const RoleARNSchema = z
  .string()
  .min(1)
  .max(110)
  .openapi({
    description:
      'The Amazon Resource Name (ARN) of an <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html#roles-about-termsandconcepts">AWS IAM Role</a>, such as the following: arn:aws:iam::account:role/rolename. ',
  })
  .openapi('RoleARN')

const ComputeStatisticsSchema = z.boolean().openapi('ComputeStatistics')

const CreateDataSourceFromRDSInputSchema = z
  .object({
    DataSourceId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A user-supplied ID that uniquely identifies the <code>DataSource</code>. Typically, an Amazon Resource Number (ARN) becomes the ID for a <code>DataSource</code>.',
        }),
    ),
    DataSourceName: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description: 'A user-supplied name or description of the <code>DataSource</code>.',
        }),
    ).exactOptional(),
    RDSData: RDSDataSpecSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The data specification of an Amazon RDS <code>DataSource</code>:</p> <ul> <li> <p>DatabaseInformation -</p> <ul> <li> <p> <code>DatabaseName</code> - The name of the Amazon RDS database.</p> </li> <li> <p> <code>InstanceIdentifier </code> - A unique identifier for the Amazon RDS database instance.</p> </li> </ul> </li> <li> <p>DatabaseCredentials - AWS Identity and Access Management (IAM) credentials that are used to connect to the Amazon RDS database.</p> </li> <li> <p>ResourceRole - A role (DataPipelineDefaultResourceRole) assumed by an EC2 instance to carry out the copy task from Amazon RDS to Amazon Simple Storage Service (Amazon S3). For more information, see <a href="https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-roles.html">Role templates</a> for data pipelines.</p> </li> <li> <p>ServiceRole - A role (DataPipelineDefaultRole) assumed by the AWS Data Pipeline service to monitor the progress of the copy task from Amazon RDS to Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-roles.html">Role templates</a> for data pipelines.</p> </li> <li> <p>SecurityInfo - The security information to use to access an RDS DB instance. You need to set up appropriate ingress rules for the security entity IDs provided to allow access to the Amazon RDS instance. Specify a [<code>SubnetId</code>, <code>SecurityGroupIds</code>] pair for a VPC-based RDS DB instance.</p> </li> <li> <p>SelectSqlQuery - A query that is used to retrieve the observation data for the <code>Datasource</code>.</p> </li> <li> <p>S3StagingLocation - The Amazon S3 location for staging Amazon RDS data. The data retrieved from Amazon RDS using <code>SelectSqlQuery</code> is stored in this location.</p> </li> <li> <p>DataSchemaUri - The Amazon S3 location of the <code>DataSchema</code>.</p> </li> <li> <p>DataSchema - A JSON string representing the schema. This is not required if <code>DataSchemaUri</code> is specified. </p> </li> <li> <p>DataRearrangement - A JSON string that represents the splitting and rearrangement requirements for the <code>Datasource</code>. </p> <p> Sample - <code> "{\\"splitting\\":{\\"percentBegin\\":10,\\"percentEnd\\":60}}"</code> </p> </li> </ul>',
        }),
    ),
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The role that Amazon ML assumes on behalf of the user to create and activate a data pipeline in the user's account and copy data using the <code>SelectSqlQuery</code> query from Amazon RDS to Amazon S3.</p> <p/>",
        }),
    ),
    ComputeStatistics: ComputeStatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The compute statistics for a <code>DataSource</code>. The statistics are generated from the observation data referenced by a <code>DataSource</code>. Amazon ML uses the statistics internally during <code>MLModel</code> training. This parameter must be set to <code>true</code> if the <code/>DataSource<code/> needs to be used for <code>MLModel</code> training. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DataSourceId', 'RDSData', 'RoleARN'],
    title: 'CreateDataSourceFromRDSInput',
  })
  .openapi('CreateDataSourceFromRDSInput')

const CreateDataSourceFromRedshiftOutputSchema = z
  .object({
    DataSourceId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A user-supplied ID that uniquely identifies the datasource. This value should be identical to the value of the <code>DataSourceID</code> in the request. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p> Represents the output of a <code>CreateDataSourceFromRedshift</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateDataSourceFromRedshift</code> operation is asynchronous. You can poll for updates by using the <code>GetBatchPrediction</code> operation and checking the <code>Status</code> parameter. </p>',
    required: [],
  })
  .openapi('CreateDataSourceFromRedshiftOutput')

const RedshiftDatabaseNameSchema = z
  .string()
  .regex(/[a-z0-9]+/)
  .min(1)
  .max(64)
  .openapi({ description: 'The name of a database hosted on an Amazon Redshift cluster.' })
  .openapi('RedshiftDatabaseName')

const RedshiftClusterIdentifierSchema = z
  .string()
  .regex(/[a-z0-9-]+/)
  .min(1)
  .max(63)
  .openapi({ description: 'The ID of an Amazon Redshift cluster.' })
  .openapi('RedshiftClusterIdentifier')

const RedshiftDatabaseSchema = z
  .object({
    DatabaseName: RedshiftDatabaseNameSchema,
    ClusterIdentifier: RedshiftClusterIdentifierSchema,
  })
  .openapi({
    required: ['DatabaseName', 'ClusterIdentifier'],
    description:
      'Describes the database details required to connect to an Amazon Redshift database.',
  })
  .openapi('RedshiftDatabase')

const RedshiftSelectSqlQuerySchema = z
  .string()
  .min(1)
  .max(16777216)
  .openapi({
    description:
      ' Describes the SQL query to execute on the Amazon Redshift database. The SQL query should be valid for an Amazon Redshift <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_SELECT_synopsis.html">SELECT</a>. ',
  })
  .openapi('RedshiftSelectSqlQuery')

const RedshiftDatabaseUsernameSchema = z
  .string()
  .min(1)
  .max(128)
  .openapi({
    description:
      'A username to be used by Amazon Machine Learning (Amazon ML)to connect to a database on an Amazon Redshift cluster. The username should have sufficient permissions to execute the <code>RedshiftSelectSqlQuery</code> query. The username should be valid for an Amazon Redshift <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html">USER</a>.',
  })
  .openapi('RedshiftDatabaseUsername')

const RedshiftDatabasePasswordSchema = z
  .string()
  .min(8)
  .max(64)
  .openapi({
    description:
      'A password to be used by Amazon ML to connect to a database on an Amazon Redshift cluster. The password should have sufficient permissions to execute a <code>RedshiftSelectSqlQuery</code> query. The password should be valid for an Amazon Redshift <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html">USER</a>.',
  })
  .openapi('RedshiftDatabasePassword')

const RedshiftDatabaseCredentialsSchema = z
  .object({ Username: RedshiftDatabaseUsernameSchema, Password: RedshiftDatabasePasswordSchema })
  .openapi({
    required: ['Username', 'Password'],
    description:
      'Describes the database credentials for connecting to a database on an Amazon Redshift cluster.',
  })
  .openapi('RedshiftDatabaseCredentials')

const RedshiftDataSpecSchema = z
  .object({
    DatabaseInformation: RedshiftDatabaseSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the <code>DatabaseName</code> and <code>ClusterIdentifier</code> for an Amazon Redshift <code>DataSource</code>.',
        }),
    ),
    SelectSqlQuery: RedshiftSelectSqlQuerySchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the SQL Query to execute on an Amazon Redshift database for an Amazon Redshift <code>DataSource</code>.',
        }),
    ),
    DatabaseCredentials: RedshiftDatabaseCredentialsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes AWS Identity and Access Management (IAM) credentials that are used connect to the Amazon Redshift database.',
        }),
    ),
    S3StagingLocation: S3UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes an Amazon S3 location to store the result set of the <code>SelectSqlQuery</code> query.',
        }),
    ),
    DataRearrangement: DataRearrangementSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A JSON string that represents the splitting and rearrangement processing to be applied to a <code>DataSource</code>. If the <code>DataRearrangement</code> parameter is not provided, all of the input data is used to create the <code>Datasource</code>.</p> <p>There are multiple parameters that control what data is used to create a datasource:</p> <ul> <li> <p> <b> <code>percentBegin</code> </b> </p> <p>Use <code>percentBegin</code> to indicate the beginning of the range of the data used to create the Datasource. If you do not include <code>percentBegin</code> and <code>percentEnd</code>, Amazon ML includes all of the data when creating the datasource.</p> </li> <li> <p> <b> <code>percentEnd</code> </b> </p> <p>Use <code>percentEnd</code> to indicate the end of the range of the data used to create the Datasource. If you do not include <code>percentBegin</code> and <code>percentEnd</code>, Amazon ML includes all of the data when creating the datasource.</p> </li> <li> <p> <b> <code>complement</code> </b> </p> <p>The <code>complement</code> parameter instructs Amazon ML to use the data that is not included in the range of <code>percentBegin</code> to <code>percentEnd</code> to create a datasource. The <code>complement</code> parameter is useful if you need to create complementary datasources for training and evaluation. To create a complementary datasource, use the same values for <code>percentBegin</code> and <code>percentEnd</code>, along with the <code>complement</code> parameter.</p> <p>For example, the following two datasources do not share any data, and can be used to train and evaluate a model. The first datasource has 25 percent of the data, and the second one has 75 percent of the data.</p> <p>Datasource for evaluation: <code>{"splitting":{"percentBegin":0, "percentEnd":25}}</code> </p> <p>Datasource for training: <code>{"splitting":{"percentBegin":0, "percentEnd":25, "complement":"true"}}</code> </p> </li> <li> <p> <b> <code>strategy</code> </b> </p> <p>To change how Amazon ML splits the data for a datasource, use the <code>strategy</code> parameter.</p> <p>The default value for the <code>strategy</code> parameter is <code>sequential</code>, meaning that Amazon ML takes all of the data records between the <code>percentBegin</code> and <code>percentEnd</code> parameters for the datasource, in the order that the records appear in the input data.</p> <p>The following two <code>DataRearrangement</code> lines are examples of sequentially ordered training and evaluation datasources:</p> <p>Datasource for evaluation: <code>{"splitting":{"percentBegin":70, "percentEnd":100, "strategy":"sequential"}}</code> </p> <p>Datasource for training: <code>{"splitting":{"percentBegin":70, "percentEnd":100, "strategy":"sequential", "complement":"true"}}</code> </p> <p>To randomly split the input data into the proportions indicated by the percentBegin and percentEnd parameters, set the <code>strategy</code> parameter to <code>random</code> and provide a string that is used as the seed value for the random data splitting (for example, you can use the S3 path to your data as the random seed string). If you choose the random split strategy, Amazon ML assigns each row of data a pseudo-random number between 0 and 100, and then selects the rows that have an assigned number between <code>percentBegin</code> and <code>percentEnd</code>. Pseudo-random numbers are assigned using both the input seed string value and the byte offset as a seed, so changing the data results in a different split. Any existing ordering is preserved. The random splitting strategy ensures that variables in the training and evaluation data are distributed similarly. It is useful in the cases where the input data may have an implicit sort order, which would otherwise result in training and evaluation datasources containing non-similar data records.</p> <p>The following two <code>DataRearrangement</code> lines are examples of non-sequentially ordered training and evaluation datasources:</p> <p>Datasource for evaluation: <code>{"splitting":{"percentBegin":70, "percentEnd":100, "strategy":"random", "randomSeed"="s3://my_s3_path/bucket/file.csv"}}</code> </p> <p>Datasource for training: <code>{"splitting":{"percentBegin":70, "percentEnd":100, "strategy":"random", "randomSeed"="s3://my_s3_path/bucket/file.csv", "complement":"true"}}</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    DataSchema: DataSchemaSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A JSON string that represents the schema for an Amazon Redshift <code>DataSource</code>. The <code>DataSchema</code> defines the structure of the observation data in the data file(s) referenced in the <code>DataSource</code>.</p> <p>A <code>DataSchema</code> is not required if you specify a <code>DataSchemaUri</code>.</p> <p>Define your <code>DataSchema</code> as a series of key-value pairs. <code>attributes</code> and <code>excludedVariableNames</code> have an array of key-value pairs for their value. Use the following format to define your <code>DataSchema</code>.</p> <p>{ "version": "1.0",</p> <p>"recordAnnotationFieldName": "F1",</p> <p>"recordWeightFieldName": "F2",</p> <p>"targetFieldName": "F3",</p> <p>"dataFormat": "CSV",</p> <p>"dataFileContainsHeader": true,</p> <p>"attributes": [</p> <p>{ "fieldName": "F1", "fieldType": "TEXT" }, { "fieldName": "F2", "fieldType": "NUMERIC" }, { "fieldName": "F3", "fieldType": "CATEGORICAL" }, { "fieldName": "F4", "fieldType": "NUMERIC" }, { "fieldName": "F5", "fieldType": "CATEGORICAL" }, { "fieldName": "F6", "fieldType": "TEXT" }, { "fieldName": "F7", "fieldType": "WEIGHTED_INT_SEQUENCE" }, { "fieldName": "F8", "fieldType": "WEIGHTED_STRING_SEQUENCE" } ],</p> <p>"excludedVariableNames": [ "F6" ] }</p>',
        }),
    ).exactOptional(),
    DataSchemaUri: S3UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the schema location for an Amazon Redshift <code>DataSource</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DatabaseInformation', 'SelectSqlQuery', 'DatabaseCredentials', 'S3StagingLocation'],
    description: 'Describes the data specification of an Amazon Redshift <code>DataSource</code>.',
  })
  .openapi('RedshiftDataSpec')

const CreateDataSourceFromRedshiftInputSchema = z
  .object({
    DataSourceId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description: 'A user-supplied ID that uniquely identifies the <code>DataSource</code>.',
        }),
    ),
    DataSourceName: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description: 'A user-supplied name or description of the <code>DataSource</code>. ',
        }),
    ).exactOptional(),
    DataSpec: RedshiftDataSpecSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The data specification of an Amazon Redshift <code>DataSource</code>:</p> <ul> <li> <p>DatabaseInformation -</p> <ul> <li> <p> <code>DatabaseName</code> - The name of the Amazon Redshift database.</p> </li> <li> <p> <code> ClusterIdentifier</code> - The unique ID for the Amazon Redshift cluster.</p> </li> </ul> </li> <li> <p>DatabaseCredentials - The AWS Identity and Access Management (IAM) credentials that are used to connect to the Amazon Redshift database.</p> </li> <li> <p>SelectSqlQuery - The query that is used to retrieve the observation data for the <code>Datasource</code>.</p> </li> <li> <p>S3StagingLocation - The Amazon Simple Storage Service (Amazon S3) location for staging Amazon Redshift data. The data retrieved from Amazon Redshift using the <code>SelectSqlQuery</code> query is stored in this location.</p> </li> <li> <p>DataSchemaUri - The Amazon S3 location of the <code>DataSchema</code>.</p> </li> <li> <p>DataSchema - A JSON string representing the schema. This is not required if <code>DataSchemaUri</code> is specified. </p> </li> <li> <p>DataRearrangement - A JSON string that represents the splitting and rearrangement requirements for the <code>DataSource</code>.</p> <p> Sample - <code> "{\\"splitting\\":{\\"percentBegin\\":10,\\"percentEnd\\":60}}"</code> </p> </li> </ul>',
        }),
    ),
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A fully specified role Amazon Resource Name (ARN). Amazon ML assumes the role on behalf of the user to create the following:</p> <ul> <li> <p>A security group to allow Amazon ML to execute the <code>SelectSqlQuery</code> query on an Amazon Redshift cluster</p> </li> <li> <p>An Amazon S3 bucket policy to grant Amazon ML read/write permissions on the <code>S3StagingLocation</code> </p> </li> </ul>',
        }),
    ),
    ComputeStatistics: ComputeStatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The compute statistics for a <code>DataSource</code>. The statistics are generated from the observation data referenced by a <code>DataSource</code>. Amazon ML uses the statistics internally during <code>MLModel</code> training. This parameter must be set to <code>true</code> if the <code>DataSource</code> needs to be used for <code>MLModel</code> training.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DataSourceId', 'DataSpec', 'RoleARN'],
    title: 'CreateDataSourceFromRedshiftInput',
  })
  .openapi('CreateDataSourceFromRedshiftInput')

const CreateDataSourceFromS3OutputSchema = z
  .object({
    DataSourceId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A user-supplied ID that uniquely identifies the <code>DataSource</code>. This value should be identical to the value of the <code>DataSourceID</code> in the request. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p> Represents the output of a <code>CreateDataSourceFromS3</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateDataSourceFromS3</code> operation is asynchronous. You can poll for updates by using the <code>GetBatchPrediction</code> operation and checking the <code>Status</code> parameter. </p>',
    required: [],
  })
  .openapi('CreateDataSourceFromS3Output')

const S3DataSpecSchema = z
  .object({
    DataLocationS3: S3UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location of the data file(s) used by a <code>DataSource</code>. The URI specifies a data file or an Amazon Simple Storage Service (Amazon S3) directory or bucket containing data files.',
        }),
    ),
    DataRearrangement: DataRearrangementSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A JSON string that represents the splitting and rearrangement processing to be applied to a <code>DataSource</code>. If the <code>DataRearrangement</code> parameter is not provided, all of the input data is used to create the <code>Datasource</code>.</p> <p>There are multiple parameters that control what data is used to create a datasource:</p> <ul> <li> <p> <b> <code>percentBegin</code> </b> </p> <p>Use <code>percentBegin</code> to indicate the beginning of the range of the data used to create the Datasource. If you do not include <code>percentBegin</code> and <code>percentEnd</code>, Amazon ML includes all of the data when creating the datasource.</p> </li> <li> <p> <b> <code>percentEnd</code> </b> </p> <p>Use <code>percentEnd</code> to indicate the end of the range of the data used to create the Datasource. If you do not include <code>percentBegin</code> and <code>percentEnd</code>, Amazon ML includes all of the data when creating the datasource.</p> </li> <li> <p> <b> <code>complement</code> </b> </p> <p>The <code>complement</code> parameter instructs Amazon ML to use the data that is not included in the range of <code>percentBegin</code> to <code>percentEnd</code> to create a datasource. The <code>complement</code> parameter is useful if you need to create complementary datasources for training and evaluation. To create a complementary datasource, use the same values for <code>percentBegin</code> and <code>percentEnd</code>, along with the <code>complement</code> parameter.</p> <p>For example, the following two datasources do not share any data, and can be used to train and evaluate a model. The first datasource has 25 percent of the data, and the second one has 75 percent of the data.</p> <p>Datasource for evaluation: <code>{"splitting":{"percentBegin":0, "percentEnd":25}}</code> </p> <p>Datasource for training: <code>{"splitting":{"percentBegin":0, "percentEnd":25, "complement":"true"}}</code> </p> </li> <li> <p> <b> <code>strategy</code> </b> </p> <p>To change how Amazon ML splits the data for a datasource, use the <code>strategy</code> parameter.</p> <p>The default value for the <code>strategy</code> parameter is <code>sequential</code>, meaning that Amazon ML takes all of the data records between the <code>percentBegin</code> and <code>percentEnd</code> parameters for the datasource, in the order that the records appear in the input data.</p> <p>The following two <code>DataRearrangement</code> lines are examples of sequentially ordered training and evaluation datasources:</p> <p>Datasource for evaluation: <code>{"splitting":{"percentBegin":70, "percentEnd":100, "strategy":"sequential"}}</code> </p> <p>Datasource for training: <code>{"splitting":{"percentBegin":70, "percentEnd":100, "strategy":"sequential", "complement":"true"}}</code> </p> <p>To randomly split the input data into the proportions indicated by the percentBegin and percentEnd parameters, set the <code>strategy</code> parameter to <code>random</code> and provide a string that is used as the seed value for the random data splitting (for example, you can use the S3 path to your data as the random seed string). If you choose the random split strategy, Amazon ML assigns each row of data a pseudo-random number between 0 and 100, and then selects the rows that have an assigned number between <code>percentBegin</code> and <code>percentEnd</code>. Pseudo-random numbers are assigned using both the input seed string value and the byte offset as a seed, so changing the data results in a different split. Any existing ordering is preserved. The random splitting strategy ensures that variables in the training and evaluation data are distributed similarly. It is useful in the cases where the input data may have an implicit sort order, which would otherwise result in training and evaluation datasources containing non-similar data records.</p> <p>The following two <code>DataRearrangement</code> lines are examples of non-sequentially ordered training and evaluation datasources:</p> <p>Datasource for evaluation: <code>{"splitting":{"percentBegin":70, "percentEnd":100, "strategy":"random", "randomSeed"="s3://my_s3_path/bucket/file.csv"}}</code> </p> <p>Datasource for training: <code>{"splitting":{"percentBegin":70, "percentEnd":100, "strategy":"random", "randomSeed"="s3://my_s3_path/bucket/file.csv", "complement":"true"}}</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    DataSchema: DataSchemaSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> A JSON string that represents the schema for an Amazon S3 <code>DataSource</code>. The <code>DataSchema</code> defines the structure of the observation data in the data file(s) referenced in the <code>DataSource</code>.</p> <p>You must provide either the <code>DataSchema</code> or the <code>DataSchemaLocationS3</code>.</p> <p>Define your <code>DataSchema</code> as a series of key-value pairs. <code>attributes</code> and <code>excludedVariableNames</code> have an array of key-value pairs for their value. Use the following format to define your <code>DataSchema</code>.</p> <p>{ "version": "1.0",</p> <p>"recordAnnotationFieldName": "F1",</p> <p>"recordWeightFieldName": "F2",</p> <p>"targetFieldName": "F3",</p> <p>"dataFormat": "CSV",</p> <p>"dataFileContainsHeader": true,</p> <p>"attributes": [</p> <p>{ "fieldName": "F1", "fieldType": "TEXT" }, { "fieldName": "F2", "fieldType": "NUMERIC" }, { "fieldName": "F3", "fieldType": "CATEGORICAL" }, { "fieldName": "F4", "fieldType": "NUMERIC" }, { "fieldName": "F5", "fieldType": "CATEGORICAL" }, { "fieldName": "F6", "fieldType": "TEXT" }, { "fieldName": "F7", "fieldType": "WEIGHTED_INT_SEQUENCE" }, { "fieldName": "F8", "fieldType": "WEIGHTED_STRING_SEQUENCE" } ],</p> <p>"excludedVariableNames": [ "F6" ] }</p>',
        }),
    ).exactOptional(),
    DataSchemaLocationS3: S3UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the schema location in Amazon S3. You must provide either the <code>DataSchema</code> or the <code>DataSchemaLocationS3</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DataLocationS3'],
    description: ' Describes the data specification of a <code>DataSource</code>.',
  })
  .openapi('S3DataSpec')

const CreateDataSourceFromS3InputSchema = z
  .object({
    DataSourceId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A user-supplied identifier that uniquely identifies the <code>DataSource</code>. ',
        }),
    ),
    DataSourceName: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description: 'A user-supplied name or description of the <code>DataSource</code>. ',
        }),
    ).exactOptional(),
    DataSpec: S3DataSpecSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The data specification of a <code>DataSource</code>:</p> <ul> <li> <p>DataLocationS3 - The Amazon S3 location of the observation data.</p> </li> <li> <p>DataSchemaLocationS3 - The Amazon S3 location of the <code>DataSchema</code>.</p> </li> <li> <p>DataSchema - A JSON string representing the schema. This is not required if <code>DataSchemaUri</code> is specified. </p> </li> <li> <p>DataRearrangement - A JSON string that represents the splitting and rearrangement requirements for the <code>Datasource</code>. </p> <p> Sample - <code> "{\\"splitting\\":{\\"percentBegin\\":10,\\"percentEnd\\":60}}"</code> </p> </li> </ul>',
        }),
    ),
    ComputeStatistics: ComputeStatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The compute statistics for a <code>DataSource</code>. The statistics are generated from the observation data referenced by a <code>DataSource</code>. Amazon ML uses the statistics internally during <code>MLModel</code> training. This parameter must be set to <code>true</code> if the <code/>DataSource<code/> needs to be used for <code>MLModel</code> training.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DataSourceId', 'DataSpec'], title: 'CreateDataSourceFromS3Input' })
  .openapi('CreateDataSourceFromS3Input')

const CreateEvaluationOutputSchema = z
  .object({
    EvaluationId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user-supplied ID that uniquely identifies the <code>Evaluation</code>. This value should be identical to the value of the <code>EvaluationId</code> in the request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p> Represents the output of a <code>CreateEvaluation</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p> <code>CreateEvaluation</code> operation is asynchronous. You can poll for status updates by using the <code>GetEvcaluation</code> operation and checking the <code>Status</code> parameter. </p>',
    required: [],
  })
  .openapi('CreateEvaluationOutput')

const CreateEvaluationInputSchema = z
  .object({
    EvaluationId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description: 'A user-supplied ID that uniquely identifies the <code>Evaluation</code>.',
        }),
    ),
    EvaluationName: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description: 'A user-supplied name or description of the <code>Evaluation</code>.',
        }),
    ).exactOptional(),
    MLModelId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the <code>MLModel</code> to evaluate.</p> <p>The schema used in creating the <code>MLModel</code> must match the schema of the <code>DataSource</code> used in the <code>Evaluation</code>.</p>',
        }),
    ),
    EvaluationDataSourceId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the <code>DataSource</code> for the evaluation. The schema of the <code>DataSource</code> must match the schema used to create the <code>MLModel</code>.',
        }),
    ),
  })
  .openapi({
    required: ['EvaluationId', 'MLModelId', 'EvaluationDataSourceId'],
    title: 'CreateEvaluationInput',
  })
  .openapi('CreateEvaluationInput')

const CreateMLModelOutputSchema = z
  .object({
    MLModelId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A user-supplied ID that uniquely identifies the <code>MLModel</code>. This value should be identical to the value of the <code>MLModelId</code> in the request. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p> Represents the output of a <code>CreateMLModel</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateMLModel</code> operation is asynchronous. You can poll for status updates by using the <code>GetMLModel</code> operation and checking the <code>Status</code> parameter. </p>',
    required: [],
  })
  .openapi('CreateMLModelOutput')

const MLModelTypeSchema = z.enum(['REGRESSION', 'BINARY', 'MULTICLASS']).openapi('MLModelType')

const StringTypeSchema = z.string().openapi({ description: 'String type.' }).openapi('StringType')

const TrainingParametersSchema = z
  .record(z.string(), StringTypeSchema)
  .openapi('TrainingParameters')

const RecipeSchema = z.string().max(131071).openapi('Recipe')

const CreateMLModelInputSchema = z
  .object({
    MLModelId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description: 'A user-supplied ID that uniquely identifies the <code>MLModel</code>.',
        }),
    ),
    MLModelName: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description: 'A user-supplied name or description of the <code>MLModel</code>.',
        }),
    ).exactOptional(),
    MLModelType: MLModelTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The category of supervised learning that this <code>MLModel</code> will address. Choose from the following types:</p> <ul> <li> <p>Choose <code>REGRESSION</code> if the <code>MLModel</code> will be used to predict a numeric value.</p> </li> <li> <p>Choose <code>BINARY</code> if the <code>MLModel</code> result has two possible values.</p> </li> <li> <p>Choose <code>MULTICLASS</code> if the <code>MLModel</code> result has a limited number of values.</p> </li> </ul> <p> For more information, see the <a href="https://docs.aws.amazon.com/machine-learning/latest/dg">Amazon Machine Learning Developer Guide</a>.</p>',
        }),
    ),
    Parameters: TrainingParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of the training parameters in the <code>MLModel</code>. The list is implemented as a map of key-value pairs.</p> <p>The following is the current set of training parameters:</p> <ul> <li> <p> <code>sgd.maxMLModelSizeInBytes</code> - The maximum allowed size of the model. Depending on the input data, the size of the model might affect its performance.</p> <p> The value is an integer that ranges from <code>100000</code> to <code>2147483648</code>. The default value is <code>33554432</code>.</p> </li> <li> <p> <code>sgd.maxPasses</code> - The number of times that the training process traverses the observations to build the <code>MLModel</code>. The value is an integer that ranges from <code>1</code> to <code>10000</code>. The default value is <code>10</code>.</p> </li> <li> <p> <code>sgd.shuffleType</code> - Whether Amazon ML shuffles the training data. Shuffling the data improves a model's ability to find the optimal solution for a variety of data types. The valid values are <code>auto</code> and <code>none</code>. The default value is <code>none</code>. We strongly recommend that you shuffle your data.</p> </li> <li> <p> <code>sgd.l1RegularizationAmount</code> - The coefficient regularization L1 norm. It controls overfitting the data by penalizing large coefficients. This tends to drive coefficients to zero, resulting in a sparse feature set. If you use this parameter, start by specifying a small value, such as <code>1.0E-08</code>.</p> <p>The value is a double that ranges from <code>0</code> to <code>MAX_DOUBLE</code>. The default is to not use L1 normalization. This parameter can't be used when <code>L2</code> is specified. Use this parameter sparingly.</p> </li> <li> <p> <code>sgd.l2RegularizationAmount</code> - The coefficient regularization L2 norm. It controls overfitting the data by penalizing large coefficients. This tends to drive coefficients to small, nonzero values. If you use this parameter, start by specifying a small value, such as <code>1.0E-08</code>.</p> <p>The value is a double that ranges from <code>0</code> to <code>MAX_DOUBLE</code>. The default is to not use L2 normalization. This parameter can't be used when <code>L1</code> is specified. Use this parameter sparingly.</p> </li> </ul>",
        }),
    ).exactOptional(),
    TrainingDataSourceId: EntityIdSchema.and(
      z
        .any()
        .openapi({ description: 'The <code>DataSource</code> that points to the training data.' }),
    ),
    Recipe: RecipeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The data recipe for creating the <code>MLModel</code>. You must specify either the recipe or its URI. If you don't specify a recipe or its URI, Amazon ML creates a default.",
        }),
    ).exactOptional(),
    RecipeUri: S3UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Simple Storage Service (Amazon S3) location and file name that contains the <code>MLModel</code> recipe. You must specify either the recipe or its URI. If you don't specify a recipe or its URI, Amazon ML creates a default.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['MLModelId', 'MLModelType', 'TrainingDataSourceId'],
    title: 'CreateMLModelInput',
  })
  .openapi('CreateMLModelInput')

const IntegerTypeSchema = z
  .int()
  .openapi({ description: 'Integer type that is a 32-bit signed number.' })
  .openapi('IntegerType')

const EpochTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi({ description: 'A timestamp represented in epoch time.' })
  .openapi('EpochTime')

const VipURLSchema = z
  .string()
  .regex(/https:\/\/[a-zA-Z0-9-.]*\.amazon(aws)?\.com[\/]?/)
  .max(2048)
  .openapi('VipURL')

const RealtimeEndpointStatusSchema = z
  .enum(['NONE', 'READY', 'UPDATING', 'FAILED'])
  .openapi('RealtimeEndpointStatus')

const RealtimeEndpointInfoSchema = z
  .object({
    PeakRequestsPerSecond: IntegerTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The maximum processing rate for the real-time endpoint for <code>MLModel</code>, measured in incoming requests per second.',
        }),
    ).exactOptional(),
    CreatedAt: EpochTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time that the request to create the real-time endpoint for the <code>MLModel</code> was received. The time is expressed in epoch time.',
        }),
    ).exactOptional(),
    EndpointUrl: VipURLSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The URI that specifies where to send real-time prediction requests for the <code>MLModel</code>.</p> <p> <b>Note:</b> The application must wait until the real-time endpoint is ready before using this URI.</p>',
        }),
    ).exactOptional(),
    EndpointStatus: RealtimeEndpointStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The current status of the real-time endpoint for the <code>MLModel</code>. This element can have one of the following values: </p> <ul> <li> <p> <code>NONE</code> - Endpoint does not exist or was previously deleted.</p> </li> <li> <p> <code>READY</code> - Endpoint is ready to be used for real-time predictions.</p> </li> <li> <p> <code>UPDATING</code> - Updating/creating the endpoint. </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' Describes the real-time endpoint information for an <code>MLModel</code>.',
    required: [],
  })
  .openapi('RealtimeEndpointInfo')

const CreateRealtimeEndpointOutputSchema = z
  .object({
    MLModelId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A user-supplied ID that uniquely identifies the <code>MLModel</code>. This value should be identical to the value of the <code>MLModelId</code> in the request.',
        }),
    ).exactOptional(),
    RealtimeEndpointInfo: RealtimeEndpointInfoSchema.and(
      z.any().openapi({ description: 'The endpoint information of the <code>MLModel</code> ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Represents the output of an <code>CreateRealtimeEndpoint</code> operation.</p> <p>The result contains the <code>MLModelId</code> and the endpoint information for the <code>MLModel</code>.</p> <p> <b>Note:</b> The endpoint information includes the URI of the <code>MLModel</code>; that is, the location to send online prediction requests for the specified <code>MLModel</code>.</p>',
    required: [],
  })
  .openapi('CreateRealtimeEndpointOutput')

const CreateRealtimeEndpointInputSchema = z
  .object({
    MLModelId: EntityIdSchema.and(
      z
        .any()
        .openapi({ description: 'The ID assigned to the <code>MLModel</code> during creation.' }),
    ),
  })
  .openapi({ required: ['MLModelId'], title: 'CreateRealtimeEndpointInput' })
  .openapi('CreateRealtimeEndpointInput')

const DeleteBatchPredictionOutputSchema = z
  .object({
    BatchPredictionId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A user-supplied ID that uniquely identifies the <code>BatchPrediction</code>. This value should be identical to the value of the <code>BatchPredictionID</code> in the request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p> Represents the output of a <code>DeleteBatchPrediction</code> operation.</p> <p>You can use the <code>GetBatchPrediction</code> operation and check the value of the <code>Status</code> parameter to see whether a <code>BatchPrediction</code> is marked as <code>DELETED</code>.</p>',
    required: [],
  })
  .openapi('DeleteBatchPredictionOutput')

const DeleteBatchPredictionInputSchema = z
  .object({
    BatchPredictionId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A user-supplied ID that uniquely identifies the <code>BatchPrediction</code>.',
        }),
    ),
  })
  .openapi({ required: ['BatchPredictionId'], title: 'DeleteBatchPredictionInput' })
  .openapi('DeleteBatchPredictionInput')

const DeleteDataSourceOutputSchema = z
  .object({
    DataSourceId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A user-supplied ID that uniquely identifies the <code>DataSource</code>. This value should be identical to the value of the <code>DataSourceID</code> in the request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' Represents the output of a <code>DeleteDataSource</code> operation.',
    required: [],
  })
  .openapi('DeleteDataSourceOutput')

const DeleteDataSourceInputSchema = z
  .object({
    DataSourceId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description: 'A user-supplied ID that uniquely identifies the <code>DataSource</code>.',
        }),
    ),
  })
  .openapi({ required: ['DataSourceId'], title: 'DeleteDataSourceInput' })
  .openapi('DeleteDataSourceInput')

const DeleteEvaluationOutputSchema = z
  .object({
    EvaluationId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A user-supplied ID that uniquely identifies the <code>Evaluation</code>. This value should be identical to the value of the <code>EvaluationId</code> in the request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p> Represents the output of a <code>DeleteEvaluation</code> operation. The output indicates that Amazon Machine Learning (Amazon ML) received the request.</p> <p>You can use the <code>GetEvaluation</code> operation and check the value of the <code>Status</code> parameter to see whether an <code>Evaluation</code> is marked as <code>DELETED</code>.</p>',
    required: [],
  })
  .openapi('DeleteEvaluationOutput')

const DeleteEvaluationInputSchema = z
  .object({
    EvaluationId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A user-supplied ID that uniquely identifies the <code>Evaluation</code> to delete.',
        }),
    ),
  })
  .openapi({ required: ['EvaluationId'], title: 'DeleteEvaluationInput' })
  .openapi('DeleteEvaluationInput')

const DeleteMLModelOutputSchema = z
  .object({
    MLModelId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A user-supplied ID that uniquely identifies the <code>MLModel</code>. This value should be identical to the value of the <code>MLModelID</code> in the request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Represents the output of a <code>DeleteMLModel</code> operation.</p> <p>You can use the <code>GetMLModel</code> operation and check the value of the <code>Status</code> parameter to see whether an <code>MLModel</code> is marked as <code>DELETED</code>.</p>',
    required: [],
  })
  .openapi('DeleteMLModelOutput')

const DeleteMLModelInputSchema = z
  .object({
    MLModelId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description: 'A user-supplied ID that uniquely identifies the <code>MLModel</code>.',
        }),
    ),
  })
  .openapi({ required: ['MLModelId'], title: 'DeleteMLModelInput' })
  .openapi('DeleteMLModelInput')

const DeleteRealtimeEndpointOutputSchema = z
  .object({
    MLModelId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A user-supplied ID that uniquely identifies the <code>MLModel</code>. This value should be identical to the value of the <code>MLModelId</code> in the request.',
        }),
    ).exactOptional(),
    RealtimeEndpointInfo: RealtimeEndpointInfoSchema.and(
      z.any().openapi({ description: 'The endpoint information of the <code>MLModel</code> ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Represents the output of an <code>DeleteRealtimeEndpoint</code> operation.</p> <p>The result contains the <code>MLModelId</code> and the endpoint information for the <code>MLModel</code>. </p>',
    required: [],
  })
  .openapi('DeleteRealtimeEndpointOutput')

const DeleteRealtimeEndpointInputSchema = z
  .object({
    MLModelId: EntityIdSchema.and(
      z
        .any()
        .openapi({ description: 'The ID assigned to the <code>MLModel</code> during creation.' }),
    ),
  })
  .openapi({ required: ['MLModelId'], title: 'DeleteRealtimeEndpointInput' })
  .openapi('DeleteRealtimeEndpointInput')

const DeleteTagsOutputSchema = z
  .object({
    ResourceId: EntityIdSchema.and(
      z.any().openapi({ description: 'The ID of the ML object from which tags were deleted.' }),
    ).exactOptional(),
    ResourceType: TaggableResourceTypeSchema.and(
      z.any().openapi({ description: 'The type of the ML object from which tags were deleted.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Amazon ML returns the following elements.', required: [] })
  .openapi('DeleteTagsOutput')

const TagKeyListSchema = z.array(TagKeySchema).max(100).openapi('TagKeyList')

const DeleteTagsInputSchema = z
  .object({
    TagKeys: TagKeyListSchema.and(z.any().openapi({ description: 'One or more tags to delete.' })),
    ResourceId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the tagged ML object. For example, <code>exampleModelId</code>.',
        }),
    ),
    ResourceType: TaggableResourceTypeSchema.and(
      z.any().openapi({ description: 'The type of the tagged ML object.' }),
    ),
  })
  .openapi({ required: ['TagKeys', 'ResourceId', 'ResourceType'], title: 'DeleteTagsInput' })
  .openapi('DeleteTagsInput')

const AwsUserArnSchema = z
  .string()
  .regex(/arn:aws:iam::[0-9]+:((user\/.+)|(root))/)
  .openapi({
    description:
      'An Amazon Web Service (AWS) user account identifier. The account identifier can be an AWS root account or an AWS Identity and Access Management (IAM) user.',
  })
  .openapi('AwsUserArn')

const EntityStatusSchema = z
  .enum(['PENDING', 'INPROGRESS', 'FAILED', 'COMPLETED', 'DELETED'])
  .openapi({
    description:
      '<p>Object status with the following possible values:</p> <ul> <li> <p> <code>PENDING</code> </p> </li> <li> <p> <code>INPROGRESS</code> </p> </li> <li> <p> <code>FAILED</code> </p> </li> <li> <p> <code>COMPLETED</code> </p> </li> <li> <p> <code>DELETED</code> </p> </li> </ul>',
  })
  .openapi('EntityStatus')

const MessageSchema = z
  .string()
  .max(10240)
  .openapi({ description: 'Description of the most recent details about an object.' })
  .openapi('Message')

const LongTypeSchema = z
  .int()
  .openapi({ description: 'Long integer type that is a 64-bit signed number.' })
  .openapi('LongType')

const BatchPredictionSchema = z
  .object({
    BatchPredictionId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID assigned to the <code>BatchPrediction</code> at creation. This value should be identical to the value of the <code>BatchPredictionID</code> in the request. ',
        }),
    ).exactOptional(),
    MLModelId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the <code>MLModel</code> that generated predictions for the <code>BatchPrediction</code> request.',
        }),
    ).exactOptional(),
    BatchPredictionDataSourceId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the <code>DataSource</code> that points to the group of observations to predict.',
        }),
    ).exactOptional(),
    InputDataLocationS3: S3UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location of the data file or directory in Amazon Simple Storage Service (Amazon S3).',
        }),
    ).exactOptional(),
    CreatedByIamUser: AwsUserArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The AWS user account that invoked the <code>BatchPrediction</code>. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.',
        }),
    ).exactOptional(),
    CreatedAt: EpochTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time that the <code>BatchPrediction</code> was created. The time is expressed in epoch time.',
        }),
    ).exactOptional(),
    LastUpdatedAt: EpochTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time of the most recent edit to the <code>BatchPrediction</code>. The time is expressed in epoch time.',
        }),
    ).exactOptional(),
    Name: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description: 'A user-supplied name or description of the <code>BatchPrediction</code>.',
        }),
    ).exactOptional(),
    Status: EntityStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the <code>BatchPrediction</code>. This element can have one of the following values:</p> <ul> <li> <p> <code>PENDING</code> - Amazon Machine Learning (Amazon ML) submitted a request to generate predictions for a batch of observations.</p> </li> <li> <p> <code>INPROGRESS</code> - The process is underway.</p> </li> <li> <p> <code>FAILED</code> - The request to perform a batch prediction did not run to completion. It is not usable.</p> </li> <li> <p> <code>COMPLETED</code> - The batch prediction process completed successfully.</p> </li> <li> <p> <code>DELETED</code> - The <code>BatchPrediction</code> is marked as deleted. It is not usable.</p> </li> </ul>',
        }),
    ).exactOptional(),
    OutputUri: S3UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            "The location of an Amazon S3 bucket or directory to receive the operation results. The following substrings are not allowed in the <code>s3 key</code> portion of the <code>outputURI</code> field: ':', '//', '/./', '/../'.",
        }),
    ).exactOptional(),
    Message: MessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description of the most recent details about processing the batch prediction request.',
        }),
    ).exactOptional(),
    ComputeTime: LongTypeSchema.exactOptional(),
    FinishedAt: EpochTimeSchema.exactOptional(),
    StartedAt: EpochTimeSchema.exactOptional(),
    TotalRecordCount: LongTypeSchema.exactOptional(),
    InvalidRecordCount: LongTypeSchema.exactOptional(),
  })
  .openapi({
    description:
      '<p> Represents the output of a <code>GetBatchPrediction</code> operation.</p> <p> The content consists of the detailed metadata, the status, and the data file information of a <code>Batch Prediction</code>.</p>',
    required: [],
  })
  .openapi('BatchPrediction')

const BatchPredictionsSchema = z.array(BatchPredictionSchema).openapi('BatchPredictions')

const DescribeBatchPredictionsOutputSchema = z
  .object({
    Results: BatchPredictionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>BatchPrediction</code> objects that meet the search criteria. ',
        }),
    ).exactOptional(),
    NextToken: StringTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the next page in the paginated results that indicates at least one more page follows.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the output of a <code>DescribeBatchPredictions</code> operation. The content is essentially a list of <code>BatchPrediction</code>s.',
    required: [],
  })
  .openapi('DescribeBatchPredictionsOutput')

const BatchPredictionFilterVariableSchema = z
  .enum([
    'CreatedAt',
    'LastUpdatedAt',
    'Status',
    'Name',
    'IAMUser',
    'MLModelId',
    'DataSourceId',
    'DataURI',
  ])
  .openapi({
    description:
      '<p>A list of the variables to use in searching or filtering <code>BatchPrediction</code>.</p> <ul> <li> <p> <code>CreatedAt</code> - Sets the search criteria to <code>BatchPrediction</code> creation date.</p> </li> <li> <p> <code>Status</code> - Sets the search criteria to <code>BatchPrediction</code> status.</p> </li> <li> <p> <code>Name</code> - Sets the search criteria to the contents of <code>BatchPrediction</code> <code>Name</code>.</p> </li> <li> <p> <code>IAMUser</code> - Sets the search criteria to the user account that invoked the <code>BatchPrediction</code> creation.</p> </li> <li> <p> <code>MLModelId</code> - Sets the search criteria to the <code>MLModel</code> used in the <code>BatchPrediction</code>.</p> </li> <li> <p> <code>DataSourceId</code> - Sets the search criteria to the <code>DataSource</code> used in the <code>BatchPrediction</code>.</p> </li> <li> <p> <code>DataURI</code> - Sets the search criteria to the data file(s) used in the <code>BatchPrediction</code>. The URL can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory.</p> </li> </ul>',
  })
  .openapi('BatchPredictionFilterVariable')

const ComparatorValueSchema = z
  .string()
  .regex(/.*\S.*|^$/)
  .max(1024)
  .openapi({
    description:
      'The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.',
  })
  .openapi('ComparatorValue')

const SortOrderSchema = z
  .enum(['asc', 'dsc'])
  .openapi({
    description:
      '<p>The sort order specified in a listing condition. Possible values include the following:</p> <ul> <li> <p> <code>asc</code> - Present the information in ascending order (from A-Z).</p> </li> <li> <p> <code>dsc</code> - Present the information in descending order (from Z-A).</p> </li> </ul>',
  })
  .openapi('SortOrder')

const PageLimitSchema = z.int().min(1).max(100).openapi('PageLimit')

const DescribeBatchPredictionsInputSchema = z
  .object({
    FilterVariable: BatchPredictionFilterVariableSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Use one of the following variables to filter a list of <code>BatchPrediction</code>:</p> <ul> <li> <p> <code>CreatedAt</code> - Sets the search criteria to the <code>BatchPrediction</code> creation date.</p> </li> <li> <p> <code>Status</code> - Sets the search criteria to the <code>BatchPrediction</code> status.</p> </li> <li> <p> <code>Name</code> - Sets the search criteria to the contents of the <code>BatchPrediction</code> <b> </b> <code>Name</code>.</p> </li> <li> <p> <code>IAMUser</code> - Sets the search criteria to the user account that invoked the <code>BatchPrediction</code> creation.</p> </li> <li> <p> <code>MLModelId</code> - Sets the search criteria to the <code>MLModel</code> used in the <code>BatchPrediction</code>.</p> </li> <li> <p> <code>DataSourceId</code> - Sets the search criteria to the <code>DataSource</code> used in the <code>BatchPrediction</code>.</p> </li> <li> <p> <code>DataURI</code> - Sets the search criteria to the data file(s) used in the <code>BatchPrediction</code>. The URL can identify either a file or an Amazon Simple Storage Solution (Amazon S3) bucket or directory.</p> </li> </ul>',
        }),
    ).exactOptional(),
    EQ: ComparatorValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The equal to operator. The <code>BatchPrediction</code> results will have <code>FilterVariable</code> values that exactly match the value specified with <code>EQ</code>.',
        }),
    ).exactOptional(),
    GT: ComparatorValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The greater than operator. The <code>BatchPrediction</code> results will have <code>FilterVariable</code> values that are greater than the value specified with <code>GT</code>.',
        }),
    ).exactOptional(),
    LT: ComparatorValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The less than operator. The <code>BatchPrediction</code> results will have <code>FilterVariable</code> values that are less than the value specified with <code>LT</code>.',
        }),
    ).exactOptional(),
    GE: ComparatorValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The greater than or equal to operator. The <code>BatchPrediction</code> results will have <code>FilterVariable</code> values that are greater than or equal to the value specified with <code>GE</code>. ',
        }),
    ).exactOptional(),
    LE: ComparatorValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The less than or equal to operator. The <code>BatchPrediction</code> results will have <code>FilterVariable</code> values that are less than or equal to the value specified with <code>LE</code>.',
        }),
    ).exactOptional(),
    NE: ComparatorValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The not equal to operator. The <code>BatchPrediction</code> results will have <code>FilterVariable</code> values not equal to the value specified with <code>NE</code>.',
        }),
    ).exactOptional(),
    Prefix: ComparatorValueSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A string that is found at the beginning of a variable, such as <code>Name</code> or <code>Id</code>.</p> <p>For example, a <code>Batch Prediction</code> operation could have the <code>Name</code> <code>2014-09-09-HolidayGiftMailer</code>. To search for this <code>BatchPrediction</code>, select <code>Name</code> for the <code>FilterVariable</code> and any of the following strings for the <code>Prefix</code>: </p> <ul> <li> <p>2014-09</p> </li> <li> <p>2014-09-09</p> </li> <li> <p>2014-09-09-Holiday</p> </li> </ul>',
        }),
    ).exactOptional(),
    SortOrder: SortOrderSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A two-value parameter that determines the sequence of the resulting list of <code>MLModel</code>s.</p> <ul> <li> <p> <code>asc</code> - Arranges the list in ascending order (A-Z, 0-9).</p> </li> <li> <p> <code>dsc</code> - Arranges the list in descending order (Z-A, 9-0).</p> </li> </ul> <p>Results are sorted by <code>FilterVariable</code>.</p>',
        }),
    ).exactOptional(),
    NextToken: StringTypeSchema.and(
      z.any().openapi({ description: 'An ID of the page in the paginated results.' }),
    ).exactOptional(),
    Limit: PageLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of pages of information to include in the result. The range of acceptable values is <code>1</code> through <code>100</code>. The default value is <code>100</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeBatchPredictionsInput', required: [] })
  .openapi('DescribeBatchPredictionsInput')

const RedshiftMetadataSchema = z
  .object({
    RedshiftDatabase: RedshiftDatabaseSchema.exactOptional(),
    DatabaseUserName: RedshiftDatabaseUsernameSchema.exactOptional(),
    SelectSqlQuery: RedshiftSelectSqlQuerySchema.and(
      z
        .any()
        .openapi({
          description:
            ' The SQL query that is specified during <a>CreateDataSourceFromRedshift</a>. Returns only if <code>Verbose</code> is true in GetDataSourceInput. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes the <code>DataSource</code> details specific to Amazon Redshift.',
    required: [],
  })
  .openapi('RedshiftMetadata')

const EDPPipelineIdSchema = z.string().min(1).max(1024).openapi('EDPPipelineId')

const RDSMetadataSchema = z
  .object({
    Database: RDSDatabaseSchema.and(
      z
        .any()
        .openapi({ description: 'The database details required to connect to an Amazon RDS.' }),
    ).exactOptional(),
    DatabaseUserName: RDSDatabaseUsernameSchema.exactOptional(),
    SelectSqlQuery: RDSSelectSqlQuerySchema.and(
      z
        .any()
        .openapi({
          description:
            'The SQL query that is supplied during <a>CreateDataSourceFromRDS</a>. Returns only if <code>Verbose</code> is true in <code>GetDataSourceInput</code>. ',
        }),
    ).exactOptional(),
    ResourceRole: EDPResourceRoleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The role (DataPipelineDefaultResourceRole) assumed by an Amazon EC2 instance to carry out the copy task from Amazon RDS to Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-roles.html">Role templates</a> for data pipelines.',
        }),
    ).exactOptional(),
    ServiceRole: EDPServiceRoleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The role (DataPipelineDefaultRole) assumed by the Data Pipeline service to monitor the progress of the copy task from Amazon RDS to Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-roles.html">Role templates</a> for data pipelines.',
        }),
    ).exactOptional(),
    DataPipelineId: EDPPipelineIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Data Pipeline instance that is used to carry to copy data from Amazon RDS to Amazon S3. You can use the ID to find details about the instance in the Data Pipeline console.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The datasource details that are specific to Amazon RDS.', required: [] })
  .openapi('RDSMetadata')

const DataSourceSchema = z
  .object({
    DataSourceId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID that is assigned to the <code>DataSource</code> during creation.',
        }),
    ).exactOptional(),
    DataLocationS3: S3UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location and name of the data in Amazon Simple Storage Service (Amazon S3) that is used by a <code>DataSource</code>.',
        }),
    ).exactOptional(),
    DataRearrangement: DataRearrangementSchema.and(
      z
        .any()
        .openapi({
          description:
            'A JSON string that represents the splitting and rearrangement requirement used when this <code>DataSource</code> was created.',
        }),
    ).exactOptional(),
    CreatedByIamUser: AwsUserArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The AWS user account from which the <code>DataSource</code> was created. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.',
        }),
    ).exactOptional(),
    CreatedAt: EpochTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time that the <code>DataSource</code> was created. The time is expressed in epoch time.',
        }),
    ).exactOptional(),
    LastUpdatedAt: EpochTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time of the most recent edit to the <code>BatchPrediction</code>. The time is expressed in epoch time.',
        }),
    ).exactOptional(),
    DataSizeInBytes: LongTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of observations contained in the data files that the <code>DataSource</code> references.',
        }),
    ).exactOptional(),
    NumberOfFiles: LongTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of data files referenced by the <code>DataSource</code>.',
        }),
    ).exactOptional(),
    Name: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description: 'A user-supplied name or description of the <code>DataSource</code>.',
        }),
    ).exactOptional(),
    Status: EntityStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The current status of the <code>DataSource</code>. This element can have one of the following values: </p> <ul> <li> <p>PENDING - Amazon Machine Learning (Amazon ML) submitted a request to create a <code>DataSource</code>.</p> </li> <li> <p>INPROGRESS - The creation process is underway.</p> </li> <li> <p>FAILED - The request to create a <code>DataSource</code> did not run to completion. It is not usable.</p> </li> <li> <p>COMPLETED - The creation process completed successfully.</p> </li> <li> <p>DELETED - The <code>DataSource</code> is marked as deleted. It is not usable.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Message: MessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description of the most recent details about creating the <code>DataSource</code>.',
        }),
    ).exactOptional(),
    RedshiftMetadata: RedshiftMetadataSchema.exactOptional(),
    RDSMetadata: RDSMetadataSchema.exactOptional(),
    RoleARN: RoleARNSchema.exactOptional(),
    ComputeStatistics: ComputeStatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The parameter is <code>true</code> if statistics need to be generated from the observation data. ',
        }),
    ).exactOptional(),
    ComputeTime: LongTypeSchema.exactOptional(),
    FinishedAt: EpochTimeSchema.exactOptional(),
    StartedAt: EpochTimeSchema.exactOptional(),
  })
  .openapi({
    description:
      '<p> Represents the output of the <code>GetDataSource</code> operation. </p> <p> The content consists of the detailed metadata and data file information and the current status of the <code>DataSource</code>. </p>',
    required: [],
  })
  .openapi('DataSource')

const DataSourcesSchema = z.array(DataSourceSchema).openapi('DataSources')

const DescribeDataSourcesOutputSchema = z
  .object({
    Results: DataSourcesSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of <code>DataSource</code> that meet the search criteria. ',
        }),
    ).exactOptional(),
    NextToken: StringTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'An ID of the next page in the paginated results that indicates at least one more page follows.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the query results from a <a>DescribeDataSources</a> operation. The content is essentially a list of <code>DataSource</code>.',
    required: [],
  })
  .openapi('DescribeDataSourcesOutput')

const DataSourceFilterVariableSchema = z
  .enum(['CreatedAt', 'LastUpdatedAt', 'Status', 'Name', 'DataLocationS3', 'IAMUser'])
  .openapi({
    description:
      '<p>A list of the variables to use in searching or filtering <code>DataSource</code>.</p> <ul> <li> <p> <code>CreatedAt</code> - Sets the search criteria to <code>DataSource</code> creation date.</p> </li> <li> <p> <code>Status</code> - Sets the search criteria to <code>DataSource</code> status.</p> </li> <li> <p> <code>Name</code> - Sets the search criteria to the contents of <code>DataSource</code> <code>Name</code>.</p> </li> <li> <p> <code>DataUri</code> - Sets the search criteria to the URI of data files used to create the <code>DataSource</code>. The URI can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory.</p> </li> <li> <p> <code>IAMUser</code> - Sets the search criteria to the user account that invoked the <code>DataSource</code> creation.</p> </li> </ul> <p> <b>Note:</b> The variable names should match the variable names in the <code>DataSource</code>.</p>',
  })
  .openapi('DataSourceFilterVariable')

const DescribeDataSourcesInputSchema = z
  .object({
    FilterVariable: DataSourceFilterVariableSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Use one of the following variables to filter a list of <code>DataSource</code>:</p> <ul> <li> <p> <code>CreatedAt</code> - Sets the search criteria to <code>DataSource</code> creation dates.</p> </li> <li> <p> <code>Status</code> - Sets the search criteria to <code>DataSource</code> statuses.</p> </li> <li> <p> <code>Name</code> - Sets the search criteria to the contents of <code>DataSource</code> <code>Name</code>.</p> </li> <li> <p> <code>DataUri</code> - Sets the search criteria to the URI of data files used to create the <code>DataSource</code>. The URI can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory.</p> </li> <li> <p> <code>IAMUser</code> - Sets the search criteria to the user account that invoked the <code>DataSource</code> creation.</p> </li> </ul>',
        }),
    ).exactOptional(),
    EQ: ComparatorValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The equal to operator. The <code>DataSource</code> results will have <code>FilterVariable</code> values that exactly match the value specified with <code>EQ</code>.',
        }),
    ).exactOptional(),
    GT: ComparatorValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The greater than operator. The <code>DataSource</code> results will have <code>FilterVariable</code> values that are greater than the value specified with <code>GT</code>.',
        }),
    ).exactOptional(),
    LT: ComparatorValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The less than operator. The <code>DataSource</code> results will have <code>FilterVariable</code> values that are less than the value specified with <code>LT</code>.',
        }),
    ).exactOptional(),
    GE: ComparatorValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The greater than or equal to operator. The <code>DataSource</code> results will have <code>FilterVariable</code> values that are greater than or equal to the value specified with <code>GE</code>. ',
        }),
    ).exactOptional(),
    LE: ComparatorValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The less than or equal to operator. The <code>DataSource</code> results will have <code>FilterVariable</code> values that are less than or equal to the value specified with <code>LE</code>.',
        }),
    ).exactOptional(),
    NE: ComparatorValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The not equal to operator. The <code>DataSource</code> results will have <code>FilterVariable</code> values not equal to the value specified with <code>NE</code>.',
        }),
    ).exactOptional(),
    Prefix: ComparatorValueSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A string that is found at the beginning of a variable, such as <code>Name</code> or <code>Id</code>.</p> <p>For example, a <code>DataSource</code> could have the <code>Name</code> <code>2014-09-09-HolidayGiftMailer</code>. To search for this <code>DataSource</code>, select <code>Name</code> for the <code>FilterVariable</code> and any of the following strings for the <code>Prefix</code>: </p> <ul> <li> <p>2014-09</p> </li> <li> <p>2014-09-09</p> </li> <li> <p>2014-09-09-Holiday</p> </li> </ul>',
        }),
    ).exactOptional(),
    SortOrder: SortOrderSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A two-value parameter that determines the sequence of the resulting list of <code>DataSource</code>.</p> <ul> <li> <p> <code>asc</code> - Arranges the list in ascending order (A-Z, 0-9).</p> </li> <li> <p> <code>dsc</code> - Arranges the list in descending order (Z-A, 9-0).</p> </li> </ul> <p>Results are sorted by <code>FilterVariable</code>.</p>',
        }),
    ).exactOptional(),
    NextToken: StringTypeSchema.and(
      z.any().openapi({ description: 'The ID of the page in the paginated results.' }),
    ).exactOptional(),
    Limit: PageLimitSchema.and(
      z
        .any()
        .openapi({
          description: ' The maximum number of <code>DataSource</code> to include in the result.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeDataSourcesInput', required: [] })
  .openapi('DescribeDataSourcesInput')

const PerformanceMetricsPropertyValueSchema = z.string().openapi('PerformanceMetricsPropertyValue')

const PerformanceMetricsPropertiesSchema = z
  .record(z.string(), PerformanceMetricsPropertyValueSchema)
  .openapi('PerformanceMetricsProperties')

const PerformanceMetricsSchema = z
  .object({ Properties: PerformanceMetricsPropertiesSchema.exactOptional() })
  .openapi({
    description:
      '<p>Measurements of how well the <code>MLModel</code> performed on known observations. One of the following metrics is returned, based on the type of the <code>MLModel</code>: </p> <ul> <li> <p>BinaryAUC: The binary <code>MLModel</code> uses the Area Under the Curve (AUC) technique to measure performance. </p> </li> <li> <p>RegressionRMSE: The regression <code>MLModel</code> uses the Root Mean Square Error (RMSE) technique to measure performance. RMSE measures the difference between predicted and actual values for a single variable.</p> </li> <li> <p>MulticlassAvgFScore: The multiclass <code>MLModel</code> uses the F1 score technique to measure performance. </p> </li> </ul> <p> For more information about performance metrics, please see the <a href="https://docs.aws.amazon.com/machine-learning/latest/dg">Amazon Machine Learning Developer Guide</a>. </p>',
    required: [],
  })
  .openapi('PerformanceMetrics')

const EvaluationSchema = z
  .object({
    EvaluationId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID that is assigned to the <code>Evaluation</code> at creation.',
        }),
    ).exactOptional(),
    MLModelId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the <code>MLModel</code> that is the focus of the evaluation.',
        }),
    ).exactOptional(),
    EvaluationDataSourceId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the <code>DataSource</code> that is used to evaluate the <code>MLModel</code>.',
        }),
    ).exactOptional(),
    InputDataLocationS3: S3UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location and name of the data in Amazon Simple Storage Server (Amazon S3) that is used in the evaluation.',
        }),
    ).exactOptional(),
    CreatedByIamUser: AwsUserArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The AWS user account that invoked the evaluation. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.',
        }),
    ).exactOptional(),
    CreatedAt: EpochTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time that the <code>Evaluation</code> was created. The time is expressed in epoch time.',
        }),
    ).exactOptional(),
    LastUpdatedAt: EpochTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time of the most recent edit to the <code>Evaluation</code>. The time is expressed in epoch time.',
        }),
    ).exactOptional(),
    Name: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description: 'A user-supplied name or description of the <code>Evaluation</code>. ',
        }),
    ).exactOptional(),
    Status: EntityStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the evaluation. This element can have one of the following values:</p> <ul> <li> <p> <code>PENDING</code> - Amazon Machine Learning (Amazon ML) submitted a request to evaluate an <code>MLModel</code>.</p> </li> <li> <p> <code>INPROGRESS</code> - The evaluation is underway.</p> </li> <li> <p> <code>FAILED</code> - The request to evaluate an <code>MLModel</code> did not run to completion. It is not usable.</p> </li> <li> <p> <code>COMPLETED</code> - The evaluation process completed successfully.</p> </li> <li> <p> <code>DELETED</code> - The <code>Evaluation</code> is marked as deleted. It is not usable.</p> </li> </ul>',
        }),
    ).exactOptional(),
    PerformanceMetrics: PerformanceMetricsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Measurements of how well the <code>MLModel</code> performed, using observations referenced by the <code>DataSource</code>. One of the following metrics is returned, based on the type of the <code>MLModel</code>: </p> <ul> <li> <p>BinaryAUC: A binary <code>MLModel</code> uses the Area Under the Curve (AUC) technique to measure performance. </p> </li> <li> <p>RegressionRMSE: A regression <code>MLModel</code> uses the Root Mean Square Error (RMSE) technique to measure performance. RMSE measures the difference between predicted and actual values for a single variable.</p> </li> <li> <p>MulticlassAvgFScore: A multiclass <code>MLModel</code> uses the F1 score technique to measure performance. </p> </li> </ul> <p> For more information about performance metrics, please see the <a href="https://docs.aws.amazon.com/machine-learning/latest/dg">Amazon Machine Learning Developer Guide</a>. </p>',
        }),
    ).exactOptional(),
    Message: MessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description of the most recent details about evaluating the <code>MLModel</code>.',
        }),
    ).exactOptional(),
    ComputeTime: LongTypeSchema.exactOptional(),
    FinishedAt: EpochTimeSchema.exactOptional(),
    StartedAt: EpochTimeSchema.exactOptional(),
  })
  .openapi({
    description:
      '<p> Represents the output of <code>GetEvaluation</code> operation. </p> <p>The content consists of the detailed metadata and data file information and the current status of the <code>Evaluation</code>.</p>',
    required: [],
  })
  .openapi('Evaluation')

const EvaluationsSchema = z.array(EvaluationSchema).openapi('Evaluations')

const DescribeEvaluationsOutputSchema = z
  .object({
    Results: EvaluationsSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of <code>Evaluation</code> that meet the search criteria. ',
        }),
    ).exactOptional(),
    NextToken: StringTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the next page in the paginated results that indicates at least one more page follows.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the query results from a <code>DescribeEvaluations</code> operation. The content is essentially a list of <code>Evaluation</code>.',
    required: [],
  })
  .openapi('DescribeEvaluationsOutput')

const EvaluationFilterVariableSchema = z
  .enum([
    'CreatedAt',
    'LastUpdatedAt',
    'Status',
    'Name',
    'IAMUser',
    'MLModelId',
    'DataSourceId',
    'DataURI',
  ])
  .openapi({
    description:
      '<p>A list of the variables to use in searching or filtering <code>Evaluation</code>.</p> <ul> <li> <p> <code>CreatedAt</code> - Sets the search criteria to <code>Evaluation</code> creation date.</p> </li> <li> <p> <code>Status</code> - Sets the search criteria to <code>Evaluation</code> status.</p> </li> <li> <p> <code>Name</code> - Sets the search criteria to the contents of <code>Evaluation</code> <b> </b> <code>Name</code>.</p> </li> <li> <p> <code>IAMUser</code> - Sets the search criteria to the user account that invoked an evaluation.</p> </li> <li> <p> <code>MLModelId</code> - Sets the search criteria to the <code>Predictor</code> that was evaluated.</p> </li> <li> <p> <code>DataSourceId</code> - Sets the search criteria to the <code>DataSource</code> used in evaluation.</p> </li> <li> <p> <code>DataUri</code> - Sets the search criteria to the data file(s) used in evaluation. The URL can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory.</p> </li> </ul>',
  })
  .openapi('EvaluationFilterVariable')

const DescribeEvaluationsInputSchema = z
  .object({
    FilterVariable: EvaluationFilterVariableSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Use one of the following variable to filter a list of <code>Evaluation</code> objects:</p> <ul> <li> <p> <code>CreatedAt</code> - Sets the search criteria to the <code>Evaluation</code> creation date.</p> </li> <li> <p> <code>Status</code> - Sets the search criteria to the <code>Evaluation</code> status.</p> </li> <li> <p> <code>Name</code> - Sets the search criteria to the contents of <code>Evaluation</code> <b> </b> <code>Name</code>.</p> </li> <li> <p> <code>IAMUser</code> - Sets the search criteria to the user account that invoked an <code>Evaluation</code>.</p> </li> <li> <p> <code>MLModelId</code> - Sets the search criteria to the <code>MLModel</code> that was evaluated.</p> </li> <li> <p> <code>DataSourceId</code> - Sets the search criteria to the <code>DataSource</code> used in <code>Evaluation</code>.</p> </li> <li> <p> <code>DataUri</code> - Sets the search criteria to the data file(s) used in <code>Evaluation</code>. The URL can identify either a file or an Amazon Simple Storage Solution (Amazon S3) bucket or directory.</p> </li> </ul>',
        }),
    ).exactOptional(),
    EQ: ComparatorValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The equal to operator. The <code>Evaluation</code> results will have <code>FilterVariable</code> values that exactly match the value specified with <code>EQ</code>.',
        }),
    ).exactOptional(),
    GT: ComparatorValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The greater than operator. The <code>Evaluation</code> results will have <code>FilterVariable</code> values that are greater than the value specified with <code>GT</code>.',
        }),
    ).exactOptional(),
    LT: ComparatorValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The less than operator. The <code>Evaluation</code> results will have <code>FilterVariable</code> values that are less than the value specified with <code>LT</code>.',
        }),
    ).exactOptional(),
    GE: ComparatorValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The greater than or equal to operator. The <code>Evaluation</code> results will have <code>FilterVariable</code> values that are greater than or equal to the value specified with <code>GE</code>. ',
        }),
    ).exactOptional(),
    LE: ComparatorValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The less than or equal to operator. The <code>Evaluation</code> results will have <code>FilterVariable</code> values that are less than or equal to the value specified with <code>LE</code>.',
        }),
    ).exactOptional(),
    NE: ComparatorValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The not equal to operator. The <code>Evaluation</code> results will have <code>FilterVariable</code> values not equal to the value specified with <code>NE</code>.',
        }),
    ).exactOptional(),
    Prefix: ComparatorValueSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A string that is found at the beginning of a variable, such as <code>Name</code> or <code>Id</code>.</p> <p>For example, an <code>Evaluation</code> could have the <code>Name</code> <code>2014-09-09-HolidayGiftMailer</code>. To search for this <code>Evaluation</code>, select <code>Name</code> for the <code>FilterVariable</code> and any of the following strings for the <code>Prefix</code>: </p> <ul> <li> <p>2014-09</p> </li> <li> <p>2014-09-09</p> </li> <li> <p>2014-09-09-Holiday</p> </li> </ul>',
        }),
    ).exactOptional(),
    SortOrder: SortOrderSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A two-value parameter that determines the sequence of the resulting list of <code>Evaluation</code>.</p> <ul> <li> <p> <code>asc</code> - Arranges the list in ascending order (A-Z, 0-9).</p> </li> <li> <p> <code>dsc</code> - Arranges the list in descending order (Z-A, 9-0).</p> </li> </ul> <p>Results are sorted by <code>FilterVariable</code>.</p>',
        }),
    ).exactOptional(),
    NextToken: StringTypeSchema.and(
      z.any().openapi({ description: 'The ID of the page in the paginated results.' }),
    ).exactOptional(),
    Limit: PageLimitSchema.and(
      z
        .any()
        .openapi({
          description: ' The maximum number of <code>Evaluation</code> to include in the result.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeEvaluationsInput', required: [] })
  .openapi('DescribeEvaluationsInput')

const MLModelNameSchema = z.string().max(1024).openapi('MLModelName')

const AlgorithmSchema = z
  .literal('sgd')
  .openapi({
    description:
      '<p>The function used to train an <code>MLModel</code>. Training choices supported by Amazon ML include the following:</p> <ul> <li> <p> <code>SGD</code> - Stochastic Gradient Descent.</p> </li> <li> <p> <code>RandomForest</code> - Random forest of decision trees.</p> </li> </ul>',
  })
  .openapi('Algorithm')

const ScoreThresholdSchema = z.float32().openapi('ScoreThreshold')

const MLModelSchema = z
  .object({
    MLModelId: EntityIdSchema.and(
      z.any().openapi({ description: 'The ID assigned to the <code>MLModel</code> at creation.' }),
    ).exactOptional(),
    TrainingDataSourceId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the training <code>DataSource</code>. The <code>CreateMLModel</code> operation uses the <code>TrainingDataSourceId</code>.',
        }),
    ).exactOptional(),
    CreatedByIamUser: AwsUserArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The AWS user account from which the <code>MLModel</code> was created. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.',
        }),
    ).exactOptional(),
    CreatedAt: EpochTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time that the <code>MLModel</code> was created. The time is expressed in epoch time.',
        }),
    ).exactOptional(),
    LastUpdatedAt: EpochTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time of the most recent edit to the <code>MLModel</code>. The time is expressed in epoch time.',
        }),
    ).exactOptional(),
    Name: MLModelNameSchema.and(
      z
        .any()
        .openapi({
          description: 'A user-supplied name or description of the <code>MLModel</code>.',
        }),
    ).exactOptional(),
    Status: EntityStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The current status of an <code>MLModel</code>. This element can have one of the following values: </p> <ul> <li> <p> <code>PENDING</code> - Amazon Machine Learning (Amazon ML) submitted a request to create an <code>MLModel</code>.</p> </li> <li> <p> <code>INPROGRESS</code> - The creation process is underway.</p> </li> <li> <p> <code>FAILED</code> - The request to create an <code>MLModel</code> didn't run to completion. The model isn't usable.</p> </li> <li> <p> <code>COMPLETED</code> - The creation process completed successfully.</p> </li> <li> <p> <code>DELETED</code> - The <code>MLModel</code> is marked as deleted. It isn't usable.</p> </li> </ul>",
        }),
    ).exactOptional(),
    SizeInBytes: LongTypeSchema.exactOptional(),
    EndpointInfo: RealtimeEndpointInfoSchema.and(
      z.any().openapi({ description: 'The current endpoint of the <code>MLModel</code>.' }),
    ).exactOptional(),
    TrainingParameters: TrainingParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of the training parameters in the <code>MLModel</code>. The list is implemented as a map of key-value pairs.</p> <p>The following is the current set of training parameters:</p> <ul> <li> <p> <code>sgd.maxMLModelSizeInBytes</code> - The maximum allowed size of the model. Depending on the input data, the size of the model might affect its performance.</p> <p> The value is an integer that ranges from <code>100000</code> to <code>2147483648</code>. The default value is <code>33554432</code>.</p> </li> <li> <p> <code>sgd.maxPasses</code> - The number of times that the training process traverses the observations to build the <code>MLModel</code>. The value is an integer that ranges from <code>1</code> to <code>10000</code>. The default value is <code>10</code>.</p> </li> <li> <p> <code>sgd.shuffleType</code> - Whether Amazon ML shuffles the training data. Shuffling the data improves a model's ability to find the optimal solution for a variety of data types. The valid values are <code>auto</code> and <code>none</code>. The default value is <code>none</code>.</p> </li> <li> <p> <code>sgd.l1RegularizationAmount</code> - The coefficient regularization L1 norm, which controls overfitting the data by penalizing large coefficients. This parameter tends to drive coefficients to zero, resulting in sparse feature set. If you use this parameter, start by specifying a small value, such as <code>1.0E-08</code>.</p> <p>The value is a double that ranges from <code>0</code> to <code>MAX_DOUBLE</code>. The default is to not use L1 normalization. This parameter can't be used when <code>L2</code> is specified. Use this parameter sparingly.</p> </li> <li> <p> <code>sgd.l2RegularizationAmount</code> - The coefficient regularization L2 norm, which controls overfitting the data by penalizing large coefficients. This tends to drive coefficients to small, nonzero values. If you use this parameter, start by specifying a small value, such as <code>1.0E-08</code>.</p> <p>The value is a double that ranges from <code>0</code> to <code>MAX_DOUBLE</code>. The default is to not use L2 normalization. This parameter can't be used when <code>L1</code> is specified. Use this parameter sparingly.</p> </li> </ul>",
        }),
    ).exactOptional(),
    InputDataLocationS3: S3UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location of the data file or directory in Amazon Simple Storage Service (Amazon S3).',
        }),
    ).exactOptional(),
    Algorithm: AlgorithmSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The algorithm used to train the <code>MLModel</code>. The following algorithm is supported:</p> <ul> <li> <p> <code>SGD</code> -- Stochastic gradient descent. The goal of <code>SGD</code> is to minimize the gradient of the loss function. </p> </li> </ul>',
        }),
    ).exactOptional(),
    MLModelType: MLModelTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Identifies the <code>MLModel</code> category. The following are the available types:</p> <ul> <li> <p> <code>REGRESSION</code> - Produces a numeric result. For example, "What price should a house be listed at?"</p> </li> <li> <p> <code>BINARY</code> - Produces one of two possible results. For example, "Is this a child-friendly web site?".</p> </li> <li> <p> <code>MULTICLASS</code> - Produces one of several possible results. For example, "Is this a HIGH-, LOW-, or MEDIUM-risk trade?".</p> </li> </ul>',
        }),
    ).exactOptional(),
    ScoreThreshold: ScoreThresholdSchema.exactOptional(),
    ScoreThresholdLastUpdatedAt: EpochTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time of the most recent edit to the <code>ScoreThreshold</code>. The time is expressed in epoch time.',
        }),
    ).exactOptional(),
    Message: MessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description of the most recent details about accessing the <code>MLModel</code>.',
        }),
    ).exactOptional(),
    ComputeTime: LongTypeSchema.exactOptional(),
    FinishedAt: EpochTimeSchema.exactOptional(),
    StartedAt: EpochTimeSchema.exactOptional(),
  })
  .openapi({
    description:
      '<p> Represents the output of a <code>GetMLModel</code> operation. </p> <p>The content consists of the detailed metadata and the current status of the <code>MLModel</code>.</p>',
    required: [],
  })
  .openapi('MLModel')

const MLModelsSchema = z.array(MLModelSchema).openapi('MLModels')

const DescribeMLModelsOutputSchema = z
  .object({
    Results: MLModelsSchema.and(
      z
        .any()
        .openapi({ description: 'A list of <code>MLModel</code> that meet the search criteria.' }),
    ).exactOptional(),
    NextToken: StringTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the next page in the paginated results that indicates at least one more page follows.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the output of a <code>DescribeMLModels</code> operation. The content is essentially a list of <code>MLModel</code>.',
    required: [],
  })
  .openapi('DescribeMLModelsOutput')

const MLModelFilterVariableSchema = z
  .enum([
    'CreatedAt',
    'LastUpdatedAt',
    'Status',
    'Name',
    'IAMUser',
    'TrainingDataSourceId',
    'RealtimeEndpointStatus',
    'MLModelType',
    'Algorithm',
    'TrainingDataURI',
  ])
  .openapi('MLModelFilterVariable')

const DescribeMLModelsInputSchema = z
  .object({
    FilterVariable: MLModelFilterVariableSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Use one of the following variables to filter a list of <code>MLModel</code>:</p> <ul> <li> <p> <code>CreatedAt</code> - Sets the search criteria to <code>MLModel</code> creation date.</p> </li> <li> <p> <code>Status</code> - Sets the search criteria to <code>MLModel</code> status.</p> </li> <li> <p> <code>Name</code> - Sets the search criteria to the contents of <code>MLModel</code> <b> </b> <code>Name</code>.</p> </li> <li> <p> <code>IAMUser</code> - Sets the search criteria to the user account that invoked the <code>MLModel</code> creation.</p> </li> <li> <p> <code>TrainingDataSourceId</code> - Sets the search criteria to the <code>DataSource</code> used to train one or more <code>MLModel</code>.</p> </li> <li> <p> <code>RealtimeEndpointStatus</code> - Sets the search criteria to the <code>MLModel</code> real-time endpoint status.</p> </li> <li> <p> <code>MLModelType</code> - Sets the search criteria to <code>MLModel</code> type: binary, regression, or multi-class.</p> </li> <li> <p> <code>Algorithm</code> - Sets the search criteria to the algorithm that the <code>MLModel</code> uses.</p> </li> <li> <p> <code>TrainingDataURI</code> - Sets the search criteria to the data file(s) used in training a <code>MLModel</code>. The URL can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory.</p> </li> </ul>',
        }),
    ).exactOptional(),
    EQ: ComparatorValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The equal to operator. The <code>MLModel</code> results will have <code>FilterVariable</code> values that exactly match the value specified with <code>EQ</code>.',
        }),
    ).exactOptional(),
    GT: ComparatorValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The greater than operator. The <code>MLModel</code> results will have <code>FilterVariable</code> values that are greater than the value specified with <code>GT</code>.',
        }),
    ).exactOptional(),
    LT: ComparatorValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The less than operator. The <code>MLModel</code> results will have <code>FilterVariable</code> values that are less than the value specified with <code>LT</code>.',
        }),
    ).exactOptional(),
    GE: ComparatorValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The greater than or equal to operator. The <code>MLModel</code> results will have <code>FilterVariable</code> values that are greater than or equal to the value specified with <code>GE</code>. ',
        }),
    ).exactOptional(),
    LE: ComparatorValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The less than or equal to operator. The <code>MLModel</code> results will have <code>FilterVariable</code> values that are less than or equal to the value specified with <code>LE</code>.',
        }),
    ).exactOptional(),
    NE: ComparatorValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The not equal to operator. The <code>MLModel</code> results will have <code>FilterVariable</code> values not equal to the value specified with <code>NE</code>.',
        }),
    ).exactOptional(),
    Prefix: ComparatorValueSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A string that is found at the beginning of a variable, such as <code>Name</code> or <code>Id</code>.</p> <p>For example, an <code>MLModel</code> could have the <code>Name</code> <code>2014-09-09-HolidayGiftMailer</code>. To search for this <code>MLModel</code>, select <code>Name</code> for the <code>FilterVariable</code> and any of the following strings for the <code>Prefix</code>: </p> <ul> <li> <p>2014-09</p> </li> <li> <p>2014-09-09</p> </li> <li> <p>2014-09-09-Holiday</p> </li> </ul>',
        }),
    ).exactOptional(),
    SortOrder: SortOrderSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A two-value parameter that determines the sequence of the resulting list of <code>MLModel</code>.</p> <ul> <li> <p> <code>asc</code> - Arranges the list in ascending order (A-Z, 0-9).</p> </li> <li> <p> <code>dsc</code> - Arranges the list in descending order (Z-A, 9-0).</p> </li> </ul> <p>Results are sorted by <code>FilterVariable</code>.</p>',
        }),
    ).exactOptional(),
    NextToken: StringTypeSchema.and(
      z.any().openapi({ description: 'The ID of the page in the paginated results.' }),
    ).exactOptional(),
    Limit: PageLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of pages of information to include in the result. The range of acceptable values is <code>1</code> through <code>100</code>. The default value is <code>100</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeMLModelsInput', required: [] })
  .openapi('DescribeMLModelsInput')

const DescribeTagsOutputSchema = z
  .object({
    ResourceId: EntityIdSchema.and(
      z.any().openapi({ description: 'The ID of the tagged ML object.' }),
    ).exactOptional(),
    ResourceType: TaggableResourceTypeSchema.and(
      z.any().openapi({ description: 'The type of the tagged ML object.' }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'A list of tags associated with the ML object.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Amazon ML returns the following elements.', required: [] })
  .openapi('DescribeTagsOutput')

const DescribeTagsInputSchema = z
  .object({
    ResourceId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the ML object. For example, <code>exampleModelId</code>. ',
        }),
    ),
    ResourceType: TaggableResourceTypeSchema.and(
      z.any().openapi({ description: 'The type of the ML object.' }),
    ),
  })
  .openapi({ required: ['ResourceId', 'ResourceType'], title: 'DescribeTagsInput' })
  .openapi('DescribeTagsInput')

const PresignedS3UrlSchema = z.string().openapi('PresignedS3Url')

const GetBatchPredictionOutputSchema = z
  .object({
    BatchPredictionId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'An ID assigned to the <code>BatchPrediction</code> at creation. This value should be identical to the value of the <code>BatchPredictionID</code> in the request.',
        }),
    ).exactOptional(),
    MLModelId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the <code>MLModel</code> that generated predictions for the <code>BatchPrediction</code> request.',
        }),
    ).exactOptional(),
    BatchPredictionDataSourceId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the <code>DataSource</code> that was used to create the <code>BatchPrediction</code>. ',
        }),
    ).exactOptional(),
    InputDataLocationS3: S3UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location of the data file or directory in Amazon Simple Storage Service (Amazon S3).',
        }),
    ).exactOptional(),
    CreatedByIamUser: AwsUserArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The AWS user account that invoked the <code>BatchPrediction</code>. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.',
        }),
    ).exactOptional(),
    CreatedAt: EpochTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time when the <code>BatchPrediction</code> was created. The time is expressed in epoch time.',
        }),
    ).exactOptional(),
    LastUpdatedAt: EpochTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time of the most recent edit to <code>BatchPrediction</code>. The time is expressed in epoch time.',
        }),
    ).exactOptional(),
    Name: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description: 'A user-supplied name or description of the <code>BatchPrediction</code>.',
        }),
    ).exactOptional(),
    Status: EntityStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the <code>BatchPrediction</code>, which can be one of the following values:</p> <ul> <li> <p> <code>PENDING</code> - Amazon Machine Learning (Amazon ML) submitted a request to generate batch predictions.</p> </li> <li> <p> <code>INPROGRESS</code> - The batch predictions are in progress.</p> </li> <li> <p> <code>FAILED</code> - The request to perform a batch prediction did not run to completion. It is not usable.</p> </li> <li> <p> <code>COMPLETED</code> - The batch prediction process completed successfully.</p> </li> <li> <p> <code>DELETED</code> - The <code>BatchPrediction</code> is marked as deleted. It is not usable.</p> </li> </ul>',
        }),
    ).exactOptional(),
    OutputUri: S3UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location of an Amazon S3 bucket or directory to receive the operation results.',
        }),
    ).exactOptional(),
    LogUri: PresignedS3UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'A link to the file that contains logs of the <code>CreateBatchPrediction</code> operation.',
        }),
    ).exactOptional(),
    Message: MessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description of the most recent details about processing the batch prediction request.',
        }),
    ).exactOptional(),
    ComputeTime: LongTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The approximate CPU time in milliseconds that Amazon Machine Learning spent processing the <code>BatchPrediction</code>, normalized and scaled on computation resources. <code>ComputeTime</code> is only available if the <code>BatchPrediction</code> is in the <code>COMPLETED</code> state.',
        }),
    ).exactOptional(),
    FinishedAt: EpochTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The epoch time when Amazon Machine Learning marked the <code>BatchPrediction</code> as <code>COMPLETED</code> or <code>FAILED</code>. <code>FinishedAt</code> is only available when the <code>BatchPrediction</code> is in the <code>COMPLETED</code> or <code>FAILED</code> state.',
        }),
    ).exactOptional(),
    StartedAt: EpochTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The epoch time when Amazon Machine Learning marked the <code>BatchPrediction</code> as <code>INPROGRESS</code>. <code>StartedAt</code> isn't available if the <code>BatchPrediction</code> is in the <code>PENDING</code> state.",
        }),
    ).exactOptional(),
    TotalRecordCount: LongTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of total records that Amazon Machine Learning saw while processing the <code>BatchPrediction</code>.',
        }),
    ).exactOptional(),
    InvalidRecordCount: LongTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of invalid records that Amazon Machine Learning saw while processing the <code>BatchPrediction</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the output of a <code>GetBatchPrediction</code> operation and describes a <code>BatchPrediction</code>.',
    required: [],
  })
  .openapi('GetBatchPredictionOutput')

const GetBatchPredictionInputSchema = z
  .object({
    BatchPredictionId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description: 'An ID assigned to the <code>BatchPrediction</code> at creation.',
        }),
    ),
  })
  .openapi({ required: ['BatchPredictionId'], title: 'GetBatchPredictionInput' })
  .openapi('GetBatchPredictionInput')

const GetDataSourceOutputSchema = z
  .object({
    DataSourceId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID assigned to the <code>DataSource</code> at creation. This value should be identical to the value of the <code>DataSourceId</code> in the request.',
        }),
    ).exactOptional(),
    DataLocationS3: S3UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location of the data file or directory in Amazon Simple Storage Service (Amazon S3).',
        }),
    ).exactOptional(),
    DataRearrangement: DataRearrangementSchema.and(
      z
        .any()
        .openapi({
          description:
            'A JSON string that represents the splitting and rearrangement requirement used when this <code>DataSource</code> was created.',
        }),
    ).exactOptional(),
    CreatedByIamUser: AwsUserArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The AWS user account from which the <code>DataSource</code> was created. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.',
        }),
    ).exactOptional(),
    CreatedAt: EpochTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time that the <code>DataSource</code> was created. The time is expressed in epoch time.',
        }),
    ).exactOptional(),
    LastUpdatedAt: EpochTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time of the most recent edit to the <code>DataSource</code>. The time is expressed in epoch time.',
        }),
    ).exactOptional(),
    DataSizeInBytes: LongTypeSchema.and(
      z.any().openapi({ description: 'The total size of observations in the data files.' }),
    ).exactOptional(),
    NumberOfFiles: LongTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of data files referenced by the <code>DataSource</code>.',
        }),
    ).exactOptional(),
    Name: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description: 'A user-supplied name or description of the <code>DataSource</code>.',
        }),
    ).exactOptional(),
    Status: EntityStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The current status of the <code>DataSource</code>. This element can have one of the following values:</p> <ul> <li> <p> <code>PENDING</code> - Amazon ML submitted a request to create a <code>DataSource</code>.</p> </li> <li> <p> <code>INPROGRESS</code> - The creation process is underway.</p> </li> <li> <p> <code>FAILED</code> - The request to create a <code>DataSource</code> did not run to completion. It is not usable.</p> </li> <li> <p> <code>COMPLETED</code> - The creation process completed successfully.</p> </li> <li> <p> <code>DELETED</code> - The <code>DataSource</code> is marked as deleted. It is not usable.</p> </li> </ul>',
        }),
    ).exactOptional(),
    LogUri: PresignedS3UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'A link to the file containing logs of <code>CreateDataSourceFrom*</code> operations.',
        }),
    ).exactOptional(),
    Message: MessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user-supplied description of the most recent details about creating the <code>DataSource</code>.',
        }),
    ).exactOptional(),
    RedshiftMetadata: RedshiftMetadataSchema.exactOptional(),
    RDSMetadata: RDSMetadataSchema.exactOptional(),
    RoleARN: RoleARNSchema.exactOptional(),
    ComputeStatistics: ComputeStatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The parameter is <code>true</code> if statistics need to be generated from the observation data. ',
        }),
    ).exactOptional(),
    ComputeTime: LongTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The approximate CPU time in milliseconds that Amazon Machine Learning spent processing the <code>DataSource</code>, normalized and scaled on computation resources. <code>ComputeTime</code> is only available if the <code>DataSource</code> is in the <code>COMPLETED</code> state and the <code>ComputeStatistics</code> is set to true.',
        }),
    ).exactOptional(),
    FinishedAt: EpochTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The epoch time when Amazon Machine Learning marked the <code>DataSource</code> as <code>COMPLETED</code> or <code>FAILED</code>. <code>FinishedAt</code> is only available when the <code>DataSource</code> is in the <code>COMPLETED</code> or <code>FAILED</code> state.',
        }),
    ).exactOptional(),
    StartedAt: EpochTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The epoch time when Amazon Machine Learning marked the <code>DataSource</code> as <code>INPROGRESS</code>. <code>StartedAt</code> isn't available if the <code>DataSource</code> is in the <code>PENDING</code> state.",
        }),
    ).exactOptional(),
    DataSourceSchema: DataSchemaSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The schema used by all of the data files of this <code>DataSource</code>.</p> <p> <b>Note:</b> This parameter is provided as part of the verbose format.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the output of a <code>GetDataSource</code> operation and describes a <code>DataSource</code>.',
    required: [],
  })
  .openapi('GetDataSourceOutput')

const VerboseSchema = z
  .boolean()
  .openapi({
    description:
      'Specifies whether a describe operation should return exhaustive or abbreviated information.',
  })
  .openapi('Verbose')

const GetDataSourceInputSchema = z
  .object({
    DataSourceId: EntityIdSchema.and(
      z
        .any()
        .openapi({ description: 'The ID assigned to the <code>DataSource</code> at creation.' }),
    ),
    Verbose: VerboseSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether the <code>GetDataSource</code> operation should return <code>DataSourceSchema</code>.</p> <p>If true, <code>DataSourceSchema</code> is returned.</p> <p>If false, <code>DataSourceSchema</code> is not returned.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DataSourceId'], title: 'GetDataSourceInput' })
  .openapi('GetDataSourceInput')

const GetEvaluationOutputSchema = z
  .object({
    EvaluationId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The evaluation ID which is same as the <code>EvaluationId</code> in the request.',
        }),
    ).exactOptional(),
    MLModelId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the <code>MLModel</code> that was the focus of the evaluation.',
        }),
    ).exactOptional(),
    EvaluationDataSourceId: EntityIdSchema.and(
      z.any().openapi({ description: 'The <code>DataSource</code> used for this evaluation.' }),
    ).exactOptional(),
    InputDataLocationS3: S3UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location of the data file or directory in Amazon Simple Storage Service (Amazon S3).',
        }),
    ).exactOptional(),
    CreatedByIamUser: AwsUserArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The AWS user account that invoked the evaluation. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.',
        }),
    ).exactOptional(),
    CreatedAt: EpochTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time that the <code>Evaluation</code> was created. The time is expressed in epoch time.',
        }),
    ).exactOptional(),
    LastUpdatedAt: EpochTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time of the most recent edit to the <code>Evaluation</code>. The time is expressed in epoch time.',
        }),
    ).exactOptional(),
    Name: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description: 'A user-supplied name or description of the <code>Evaluation</code>. ',
        }),
    ).exactOptional(),
    Status: EntityStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the evaluation. This element can have one of the following values:</p> <ul> <li> <p> <code>PENDING</code> - Amazon Machine Language (Amazon ML) submitted a request to evaluate an <code>MLModel</code>.</p> </li> <li> <p> <code>INPROGRESS</code> - The evaluation is underway.</p> </li> <li> <p> <code>FAILED</code> - The request to evaluate an <code>MLModel</code> did not run to completion. It is not usable.</p> </li> <li> <p> <code>COMPLETED</code> - The evaluation process completed successfully.</p> </li> <li> <p> <code>DELETED</code> - The <code>Evaluation</code> is marked as deleted. It is not usable.</p> </li> </ul>',
        }),
    ).exactOptional(),
    PerformanceMetrics: PerformanceMetricsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Measurements of how well the <code>MLModel</code> performed using observations referenced by the <code>DataSource</code>. One of the following metric is returned based on the type of the <code>MLModel</code>: </p> <ul> <li> <p>BinaryAUC: A binary <code>MLModel</code> uses the Area Under the Curve (AUC) technique to measure performance. </p> </li> <li> <p>RegressionRMSE: A regression <code>MLModel</code> uses the Root Mean Square Error (RMSE) technique to measure performance. RMSE measures the difference between predicted and actual values for a single variable.</p> </li> <li> <p>MulticlassAvgFScore: A multiclass <code>MLModel</code> uses the F1 score technique to measure performance. </p> </li> </ul> <p> For more information about performance metrics, please see the <a href="https://docs.aws.amazon.com/machine-learning/latest/dg">Amazon Machine Learning Developer Guide</a>. </p>',
        }),
    ).exactOptional(),
    LogUri: PresignedS3UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'A link to the file that contains logs of the <code>CreateEvaluation</code> operation.',
        }),
    ).exactOptional(),
    Message: MessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description of the most recent details about evaluating the <code>MLModel</code>.',
        }),
    ).exactOptional(),
    ComputeTime: LongTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The approximate CPU time in milliseconds that Amazon Machine Learning spent processing the <code>Evaluation</code>, normalized and scaled on computation resources. <code>ComputeTime</code> is only available if the <code>Evaluation</code> is in the <code>COMPLETED</code> state.',
        }),
    ).exactOptional(),
    FinishedAt: EpochTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The epoch time when Amazon Machine Learning marked the <code>Evaluation</code> as <code>COMPLETED</code> or <code>FAILED</code>. <code>FinishedAt</code> is only available when the <code>Evaluation</code> is in the <code>COMPLETED</code> or <code>FAILED</code> state.',
        }),
    ).exactOptional(),
    StartedAt: EpochTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The epoch time when Amazon Machine Learning marked the <code>Evaluation</code> as <code>INPROGRESS</code>. <code>StartedAt</code> isn't available if the <code>Evaluation</code> is in the <code>PENDING</code> state.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the output of a <code>GetEvaluation</code> operation and describes an <code>Evaluation</code>.',
    required: [],
  })
  .openapi('GetEvaluationOutput')

const GetEvaluationInputSchema = z
  .object({
    EvaluationId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the <code>Evaluation</code> to retrieve. The evaluation of each <code>MLModel</code> is recorded and cataloged. The ID provides the means to access the information. ',
        }),
    ),
  })
  .openapi({ required: ['EvaluationId'], title: 'GetEvaluationInput' })
  .openapi('GetEvaluationInput')

const GetMLModelOutputSchema = z
  .object({
    MLModelId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The MLModel ID, which is same as the <code>MLModelId</code> in the request.',
        }),
    ).exactOptional(),
    TrainingDataSourceId: EntityIdSchema.and(
      z.any().openapi({ description: 'The ID of the training <code>DataSource</code>.' }),
    ).exactOptional(),
    CreatedByIamUser: AwsUserArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The AWS user account from which the <code>MLModel</code> was created. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.',
        }),
    ).exactOptional(),
    CreatedAt: EpochTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time that the <code>MLModel</code> was created. The time is expressed in epoch time.',
        }),
    ).exactOptional(),
    LastUpdatedAt: EpochTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time of the most recent edit to the <code>MLModel</code>. The time is expressed in epoch time.',
        }),
    ).exactOptional(),
    Name: MLModelNameSchema.and(
      z
        .any()
        .openapi({
          description: 'A user-supplied name or description of the <code>MLModel</code>.',
        }),
    ).exactOptional(),
    Status: EntityStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The current status of the <code>MLModel</code>. This element can have one of the following values:</p> <ul> <li> <p> <code>PENDING</code> - Amazon Machine Learning (Amazon ML) submitted a request to describe a <code>MLModel</code>.</p> </li> <li> <p> <code>INPROGRESS</code> - The request is processing.</p> </li> <li> <p> <code>FAILED</code> - The request did not run to completion. The ML model isn't usable.</p> </li> <li> <p> <code>COMPLETED</code> - The request completed successfully.</p> </li> <li> <p> <code>DELETED</code> - The <code>MLModel</code> is marked as deleted. It isn't usable.</p> </li> </ul>",
        }),
    ).exactOptional(),
    SizeInBytes: LongTypeSchema.exactOptional(),
    EndpointInfo: RealtimeEndpointInfoSchema.and(
      z.any().openapi({ description: 'The current endpoint of the <code>MLModel</code> ' }),
    ).exactOptional(),
    TrainingParameters: TrainingParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of the training parameters in the <code>MLModel</code>. The list is implemented as a map of key-value pairs.</p> <p>The following is the current set of training parameters:</p> <ul> <li> <p> <code>sgd.maxMLModelSizeInBytes</code> - The maximum allowed size of the model. Depending on the input data, the size of the model might affect its performance.</p> <p> The value is an integer that ranges from <code>100000</code> to <code>2147483648</code>. The default value is <code>33554432</code>.</p> </li> <li> <p> <code>sgd.maxPasses</code> - The number of times that the training process traverses the observations to build the <code>MLModel</code>. The value is an integer that ranges from <code>1</code> to <code>10000</code>. The default value is <code>10</code>.</p> </li> <li> <p> <code>sgd.shuffleType</code> - Whether Amazon ML shuffles the training data. Shuffling data improves a model's ability to find the optimal solution for a variety of data types. The valid values are <code>auto</code> and <code>none</code>. The default value is <code>none</code>. We strongly recommend that you shuffle your data.</p> </li> <li> <p> <code>sgd.l1RegularizationAmount</code> - The coefficient regularization L1 norm. It controls overfitting the data by penalizing large coefficients. This tends to drive coefficients to zero, resulting in a sparse feature set. If you use this parameter, start by specifying a small value, such as <code>1.0E-08</code>.</p> <p>The value is a double that ranges from <code>0</code> to <code>MAX_DOUBLE</code>. The default is to not use L1 normalization. This parameter can't be used when <code>L2</code> is specified. Use this parameter sparingly.</p> </li> <li> <p> <code>sgd.l2RegularizationAmount</code> - The coefficient regularization L2 norm. It controls overfitting the data by penalizing large coefficients. This tends to drive coefficients to small, nonzero values. If you use this parameter, start by specifying a small value, such as <code>1.0E-08</code>.</p> <p>The value is a double that ranges from <code>0</code> to <code>MAX_DOUBLE</code>. The default is to not use L2 normalization. This parameter can't be used when <code>L1</code> is specified. Use this parameter sparingly.</p> </li> </ul>",
        }),
    ).exactOptional(),
    InputDataLocationS3: S3UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location of the data file or directory in Amazon Simple Storage Service (Amazon S3).',
        }),
    ).exactOptional(),
    MLModelType: MLModelTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Identifies the <code>MLModel</code> category. The following are the available types: </p> <ul> <li> <p>REGRESSION -- Produces a numeric result. For example, "What price should a house be listed at?"</p> </li> <li> <p>BINARY -- Produces one of two possible results. For example, "Is this an e-commerce website?"</p> </li> <li> <p>MULTICLASS -- Produces one of several possible results. For example, "Is this a HIGH, LOW or MEDIUM risk trade?"</p> </li> </ul>',
        }),
    ).exactOptional(),
    ScoreThreshold: ScoreThresholdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The scoring threshold is used in binary classification <code>MLModel</code> models. It marks the boundary between a positive prediction and a negative prediction.</p> <p>Output values greater than or equal to the threshold receive a positive result from the MLModel, such as <code>true</code>. Output values less than the threshold receive a negative response from the MLModel, such as <code>false</code>.</p>',
        }),
    ).exactOptional(),
    ScoreThresholdLastUpdatedAt: EpochTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time of the most recent edit to the <code>ScoreThreshold</code>. The time is expressed in epoch time.',
        }),
    ).exactOptional(),
    LogUri: PresignedS3UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'A link to the file that contains logs of the <code>CreateMLModel</code> operation.',
        }),
    ).exactOptional(),
    Message: MessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description of the most recent details about accessing the <code>MLModel</code>.',
        }),
    ).exactOptional(),
    ComputeTime: LongTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The approximate CPU time in milliseconds that Amazon Machine Learning spent processing the <code>MLModel</code>, normalized and scaled on computation resources. <code>ComputeTime</code> is only available if the <code>MLModel</code> is in the <code>COMPLETED</code> state.',
        }),
    ).exactOptional(),
    FinishedAt: EpochTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The epoch time when Amazon Machine Learning marked the <code>MLModel</code> as <code>COMPLETED</code> or <code>FAILED</code>. <code>FinishedAt</code> is only available when the <code>MLModel</code> is in the <code>COMPLETED</code> or <code>FAILED</code> state.',
        }),
    ).exactOptional(),
    StartedAt: EpochTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The epoch time when Amazon Machine Learning marked the <code>MLModel</code> as <code>INPROGRESS</code>. <code>StartedAt</code> isn't available if the <code>MLModel</code> is in the <code>PENDING</code> state.",
        }),
    ).exactOptional(),
    Recipe: RecipeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The recipe to use when training the <code>MLModel</code>. The <code>Recipe</code> provides detailed information about the observation data to use during training, and manipulations to perform on the observation data during training.</p> <p> <b>Note:</b> This parameter is provided as part of the verbose format.</p>',
        }),
    ).exactOptional(),
    Schema: DataSchemaSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The schema used by all of the data files referenced by the <code>DataSource</code>.</p> <p> <b>Note:</b> This parameter is provided as part of the verbose format.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the output of a <code>GetMLModel</code> operation, and provides detailed information about a <code>MLModel</code>.',
    required: [],
  })
  .openapi('GetMLModelOutput')

const GetMLModelInputSchema = z
  .object({
    MLModelId: EntityIdSchema.and(
      z.any().openapi({ description: 'The ID assigned to the <code>MLModel</code> at creation.' }),
    ),
    Verbose: VerboseSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether the <code>GetMLModel</code> operation should return <code>Recipe</code>.</p> <p>If true, <code>Recipe</code> is returned.</p> <p>If false, <code>Recipe</code> is not returned.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['MLModelId'], title: 'GetMLModelInput' })
  .openapi('GetMLModelInput')

const LabelSchema = z.string().min(1).openapi('Label')

const FloatLabelSchema = z.float32().openapi('FloatLabel')

const ScoreValueSchema = z.float32().openapi('ScoreValue')

const ScoreValuePerLabelMapSchema = z
  .record(z.string(), ScoreValueSchema)
  .openapi({ description: 'Provides the raw classification score corresponding to each label.' })
  .openapi('ScoreValuePerLabelMap')

const DetailsValueSchema = z.string().min(1).openapi('DetailsValue')

const DetailsMapSchema = z
  .record(z.string(), DetailsValueSchema)
  .openapi({ description: 'Provides any additional details regarding the prediction.' })
  .openapi('DetailsMap')

const PredictionSchema = z
  .object({
    predictedLabel: LabelSchema.and(
      z
        .any()
        .openapi({
          description:
            'The prediction label for either a <code>BINARY</code> or <code>MULTICLASS</code> <code>MLModel</code>.',
        }),
    ).exactOptional(),
    predictedValue: FloatLabelSchema.and(
      z
        .any()
        .openapi({
          description: 'The prediction value for <code>REGRESSION</code> <code>MLModel</code>.',
        }),
    ).exactOptional(),
    predictedScores: ScoreValuePerLabelMapSchema.exactOptional(),
    details: DetailsMapSchema.exactOptional(),
  })
  .openapi({
    description:
      '<p>The output from a <code>Predict</code> operation: </p> <ul> <li> <p> <code>Details</code> - Contains the following attributes: <code>DetailsAttributes.PREDICTIVE_MODEL_TYPE - REGRESSION | BINARY | MULTICLASS</code> <code>DetailsAttributes.ALGORITHM - SGD</code> </p> </li> <li> <p> <code>PredictedLabel</code> - Present for either a <code>BINARY</code> or <code>MULTICLASS</code> <code>MLModel</code> request. </p> </li> <li> <p> <code>PredictedScores</code> - Contains the raw classification score corresponding to each label. </p> </li> <li> <p> <code>PredictedValue</code> - Present for a <code>REGRESSION</code> <code>MLModel</code> request. </p> </li> </ul>',
    required: [],
  })
  .openapi('Prediction')

const PredictOutputSchema = z
  .object({ Prediction: PredictionSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('PredictOutput')

const VariableValueSchema = z
  .string()
  .openapi({
    description:
      "The value of a variable. Currently it's used to specify values of the target value, weights, and tag variables and for filtering variable values.",
  })
  .openapi('VariableValue')

const RecordSchema = z
  .record(z.string(), VariableValueSchema)
  .openapi({ description: 'A map of variable name-value pairs that represent an observation.' })
  .openapi('Record')

const PredictInputSchema = z
  .object({
    MLModelId: EntityIdSchema.and(
      z.any().openapi({ description: 'A unique identifier of the <code>MLModel</code>.' }),
    ),
    Record: RecordSchema,
    PredictEndpoint: VipURLSchema,
  })
  .openapi({ required: ['MLModelId', 'Record', 'PredictEndpoint'], title: 'PredictInput' })
  .openapi('PredictInput')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const PredictorNotMountedExceptionSchema = z.any().openapi('PredictorNotMountedException')

const UpdateBatchPredictionOutputSchema = z
  .object({
    BatchPredictionId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID assigned to the <code>BatchPrediction</code> during creation. This value should be identical to the value of the <code>BatchPredictionId</code> in the request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Represents the output of an <code>UpdateBatchPrediction</code> operation.</p> <p>You can see the updated content by using the <code>GetBatchPrediction</code> operation.</p>',
    required: [],
  })
  .openapi('UpdateBatchPredictionOutput')

const UpdateBatchPredictionInputSchema = z
  .object({
    BatchPredictionId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID assigned to the <code>BatchPrediction</code> during creation.',
        }),
    ),
    BatchPredictionName: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A new user-supplied name or description of the <code>BatchPrediction</code>.',
        }),
    ),
  })
  .openapi({
    required: ['BatchPredictionId', 'BatchPredictionName'],
    title: 'UpdateBatchPredictionInput',
  })
  .openapi('UpdateBatchPredictionInput')

const UpdateDataSourceOutputSchema = z
  .object({
    DataSourceId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID assigned to the <code>DataSource</code> during creation. This value should be identical to the value of the <code>DataSourceID</code> in the request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Represents the output of an <code>UpdateDataSource</code> operation.</p> <p>You can see the updated content by using the <code>GetBatchPrediction</code> operation.</p>',
    required: [],
  })
  .openapi('UpdateDataSourceOutput')

const UpdateDataSourceInputSchema = z
  .object({
    DataSourceId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID assigned to the <code>DataSource</code> during creation.',
        }),
    ),
    DataSourceName: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A new user-supplied name or description of the <code>DataSource</code> that will replace the current description. ',
        }),
    ),
  })
  .openapi({ required: ['DataSourceId', 'DataSourceName'], title: 'UpdateDataSourceInput' })
  .openapi('UpdateDataSourceInput')

const UpdateEvaluationOutputSchema = z
  .object({
    EvaluationId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID assigned to the <code>Evaluation</code> during creation. This value should be identical to the value of the <code>Evaluation</code> in the request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Represents the output of an <code>UpdateEvaluation</code> operation.</p> <p>You can see the updated content by using the <code>GetEvaluation</code> operation.</p>',
    required: [],
  })
  .openapi('UpdateEvaluationOutput')

const UpdateEvaluationInputSchema = z
  .object({
    EvaluationId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID assigned to the <code>Evaluation</code> during creation.',
        }),
    ),
    EvaluationName: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A new user-supplied name or description of the <code>Evaluation</code> that will replace the current content. ',
        }),
    ),
  })
  .openapi({ required: ['EvaluationId', 'EvaluationName'], title: 'UpdateEvaluationInput' })
  .openapi('UpdateEvaluationInput')

const UpdateMLModelOutputSchema = z
  .object({
    MLModelId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID assigned to the <code>MLModel</code> during creation. This value should be identical to the value of the <code>MLModelID</code> in the request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Represents the output of an <code>UpdateMLModel</code> operation.</p> <p>You can see the updated content by using the <code>GetMLModel</code> operation.</p>',
    required: [],
  })
  .openapi('UpdateMLModelOutput')

const UpdateMLModelInputSchema = z
  .object({
    MLModelId: EntityIdSchema.and(
      z
        .any()
        .openapi({ description: 'The ID assigned to the <code>MLModel</code> during creation.' }),
    ),
    MLModelName: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description: 'A user-supplied name or description of the <code>MLModel</code>.',
        }),
    ).exactOptional(),
    ScoreThreshold: ScoreThresholdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The <code>ScoreThreshold</code> used in binary classification <code>MLModel</code> that marks the boundary between a positive prediction and a negative prediction.</p> <p>Output values greater than or equal to the <code>ScoreThreshold</code> receive a positive result from the <code>MLModel</code>, such as <code>true</code>. Output values less than the <code>ScoreThreshold</code> receive a negative response from the <code>MLModel</code>, such as <code>false</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['MLModelId'], title: 'UpdateMLModelInput' })
  .openapi('UpdateMLModelInput')

const DetailsAttributesSchema = z
  .enum(['PredictiveModelType', 'Algorithm'])
  .openapi({
    description:
      '<p>Contains the key values of <code>DetailsMap</code>:</p> <ul> <li> <p> <code>PredictiveModelType</code> - Indicates the type of the <code>MLModel</code>.</p> </li> <li> <p> <code>Algorithm</code> - Indicates the algorithm that was used for the <code>MLModel</code>.</p> </li> </ul>',
  })
  .openapi('DetailsAttributes')

const PerformanceMetricsPropertyKeySchema = z.string().openapi('PerformanceMetricsPropertyKey')

const VariableNameSchema = z
  .string()
  .openapi({
    description:
      "The name of a variable. Currently it's used to specify the name of the target value, label, weight, and tags.",
  })
  .openapi('VariableName')

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

export const postXAmzTargetAmazonML20141212AddTagsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonML_20141212.AddTags',
  description:
    "Adds one or more tags to an object, up to a limit of 10. Each tag consists of a key and an optional value. If you add a tag using a key that is already associated with the ML object, <code>AddTags</code> updates the tag's value.",
  operationId: 'AddTags',
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
        .literal('AmazonML_20141212.AddTags')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonML_20141212.AddTags'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AddTagsInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AddTagsOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'InvalidTagException',
      content: { 'application/json': { schema: InvalidTagExceptionSchema } },
    },
    482: {
      description: 'TagLimitExceededException',
      content: { 'application/json': { schema: TagLimitExceededExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonML20141212CreateBatchPredictionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonML_20141212.CreateBatchPrediction',
  description:
    '<p>Generates predictions for a group of observations. The observations to process exist in one or more data files referenced by a <code>DataSource</code>. This operation creates a new <code>BatchPrediction</code>, and uses an <code>MLModel</code> and the data files referenced by the <code>DataSource</code> as information sources. </p> <p> <code>CreateBatchPrediction</code> is an asynchronous operation. In response to <code>CreateBatchPrediction</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>BatchPrediction</code> status to <code>PENDING</code>. After the <code>BatchPrediction</code> completes, Amazon ML sets the status to <code>COMPLETED</code>. </p> <p>You can poll for status updates by using the <a>GetBatchPrediction</a> operation and checking the <code>Status</code> parameter of the result. After the <code>COMPLETED</code> status appears, the results are available in the location specified by the <code>OutputUri</code> parameter.</p>',
  operationId: 'CreateBatchPrediction',
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
        .literal('AmazonML_20141212.CreateBatchPrediction')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonML_20141212.CreateBatchPrediction'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateBatchPredictionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateBatchPredictionOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonML20141212CreateDataSourceFromRDSRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRDS',
  description:
    '<p>Creates a <code>DataSource</code> object from an <a href="http://aws.amazon.com/rds/"> Amazon Relational Database Service</a> (Amazon RDS). A <code>DataSource</code> references data that can be used to perform <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.</p> <p> <code>CreateDataSourceFromRDS</code> is an asynchronous operation. In response to <code>CreateDataSourceFromRDS</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>DataSource</code> status to <code>PENDING</code>. After the <code>DataSource</code> is created and ready for use, Amazon ML sets the <code>Status</code> parameter to <code>COMPLETED</code>. <code>DataSource</code> in the <code>COMPLETED</code> or <code>PENDING</code> state can be used only to perform <code>&gt;CreateMLModel</code>&gt;, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations. </p> <p> If Amazon ML cannot accept the input source, it sets the <code>Status</code> parameter to <code>FAILED</code> and includes an error message in the <code>Message</code> attribute of the <code>GetDataSource</code> operation response. </p>',
  operationId: 'CreateDataSourceFromRDS',
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
        .literal('AmazonML_20141212.CreateDataSourceFromRDS')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonML_20141212.CreateDataSourceFromRDS'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateDataSourceFromRDSInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDataSourceFromRDSOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonML20141212CreateDataSourceFromRedshiftRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRedshift',
  description:
    "<p>Creates a <code>DataSource</code> from a database hosted on an Amazon Redshift cluster. A <code>DataSource</code> references data that can be used to perform either <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.</p> <p> <code>CreateDataSourceFromRedshift</code> is an asynchronous operation. In response to <code>CreateDataSourceFromRedshift</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>DataSource</code> status to <code>PENDING</code>. After the <code>DataSource</code> is created and ready for use, Amazon ML sets the <code>Status</code> parameter to <code>COMPLETED</code>. <code>DataSource</code> in <code>COMPLETED</code> or <code>PENDING</code> states can be used to perform only <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations. </p> <p> If Amazon ML can't accept the input source, it sets the <code>Status</code> parameter to <code>FAILED</code> and includes an error message in the <code>Message</code> attribute of the <code>GetDataSource</code> operation response. </p> <p>The observations should be contained in the database hosted on an Amazon Redshift cluster and should be specified by a <code>SelectSqlQuery</code> query. Amazon ML executes an <code>Unload</code> command in Amazon Redshift to transfer the result set of the <code>SelectSqlQuery</code> query to <code>S3StagingLocation</code>.</p> <p>After the <code>DataSource</code> has been created, it's ready for use in evaluations and batch predictions. If you plan to use the <code>DataSource</code> to train an <code>MLModel</code>, the <code>DataSource</code> also requires a recipe. A recipe describes how each input variable will be used in training an <code>MLModel</code>. Will the variable be included or excluded from training? Will the variable be manipulated; for example, will it be combined with another variable or will it be split apart into word combinations? The recipe provides answers to these questions.</p> <p>You can't change an existing datasource, but you can copy and modify the settings from an existing Amazon Redshift datasource to create a new datasource. To do so, call <code>GetDataSource</code> for an existing datasource and copy the values to a <code>CreateDataSource</code> call. Change the settings that you want to change and make sure that all required fields have the appropriate values.</p>",
  operationId: 'CreateDataSourceFromRedshift',
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
        .literal('AmazonML_20141212.CreateDataSourceFromRedshift')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonML_20141212.CreateDataSourceFromRedshift'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateDataSourceFromRedshiftInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDataSourceFromRedshiftOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonML20141212CreateDataSourceFromS3Route = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromS3',
  description:
    "<p>Creates a <code>DataSource</code> object. A <code>DataSource</code> references data that can be used to perform <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.</p> <p> <code>CreateDataSourceFromS3</code> is an asynchronous operation. In response to <code>CreateDataSourceFromS3</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>DataSource</code> status to <code>PENDING</code>. After the <code>DataSource</code> has been created and is ready for use, Amazon ML sets the <code>Status</code> parameter to <code>COMPLETED</code>. <code>DataSource</code> in the <code>COMPLETED</code> or <code>PENDING</code> state can be used to perform only <code>CreateMLModel</code>, <code>CreateEvaluation</code> or <code>CreateBatchPrediction</code> operations. </p> <p> If Amazon ML can't accept the input source, it sets the <code>Status</code> parameter to <code>FAILED</code> and includes an error message in the <code>Message</code> attribute of the <code>GetDataSource</code> operation response. </p> <p>The observation data used in a <code>DataSource</code> should be ready to use; that is, it should have a consistent structure, and missing data values should be kept to a minimum. The observation data must reside in one or more .csv files in an Amazon Simple Storage Service (Amazon S3) location, along with a schema that describes the data items by name and type. The same schema must be used for all of the data files referenced by the <code>DataSource</code>. </p> <p>After the <code>DataSource</code> has been created, it's ready to use in evaluations and batch predictions. If you plan to use the <code>DataSource</code> to train an <code>MLModel</code>, the <code>DataSource</code> also needs a recipe. A recipe describes how each input variable will be used in training an <code>MLModel</code>. Will the variable be included or excluded from training? Will the variable be manipulated; for example, will it be combined with another variable or will it be split apart into word combinations? The recipe provides answers to these questions.</p>",
  operationId: 'CreateDataSourceFromS3',
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
        .literal('AmazonML_20141212.CreateDataSourceFromS3')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonML_20141212.CreateDataSourceFromS3'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateDataSourceFromS3InputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDataSourceFromS3OutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonML20141212CreateEvaluationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonML_20141212.CreateEvaluation',
  description:
    '<p>Creates a new <code>Evaluation</code> of an <code>MLModel</code>. An <code>MLModel</code> is evaluated on a set of observations associated to a <code>DataSource</code>. Like a <code>DataSource</code> for an <code>MLModel</code>, the <code>DataSource</code> for an <code>Evaluation</code> contains values for the <code>Target Variable</code>. The <code>Evaluation</code> compares the predicted result for each observation to the actual outcome and provides a summary so that you know how effective the <code>MLModel</code> functions on the test data. Evaluation generates a relevant performance metric, such as BinaryAUC, RegressionRMSE or MulticlassAvgFScore based on the corresponding <code>MLModelType</code>: <code>BINARY</code>, <code>REGRESSION</code> or <code>MULTICLASS</code>. </p> <p> <code>CreateEvaluation</code> is an asynchronous operation. In response to <code>CreateEvaluation</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the evaluation status to <code>PENDING</code>. After the <code>Evaluation</code> is created and ready for use, Amazon ML sets the status to <code>COMPLETED</code>. </p> <p>You can use the <code>GetEvaluation</code> operation to check progress of the evaluation during the creation operation.</p>',
  operationId: 'CreateEvaluation',
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
        .literal('AmazonML_20141212.CreateEvaluation')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonML_20141212.CreateEvaluation'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateEvaluationInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateEvaluationOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonML20141212CreateMLModelRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonML_20141212.CreateMLModel',
  description:
    '<p>Creates a new <code>MLModel</code> using the <code>DataSource</code> and the recipe as information sources. </p> <p>An <code>MLModel</code> is nearly immutable. Users can update only the <code>MLModelName</code> and the <code>ScoreThreshold</code> in an <code>MLModel</code> without creating a new <code>MLModel</code>. </p> <p> <code>CreateMLModel</code> is an asynchronous operation. In response to <code>CreateMLModel</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>MLModel</code> status to <code>PENDING</code>. After the <code>MLModel</code> has been created and ready is for use, Amazon ML sets the status to <code>COMPLETED</code>. </p> <p>You can use the <code>GetMLModel</code> operation to check the progress of the <code>MLModel</code> during the creation operation.</p> <p> <code>CreateMLModel</code> requires a <code>DataSource</code> with computed statistics, which can be created by setting <code>ComputeStatistics</code> to <code>true</code> in <code>CreateDataSourceFromRDS</code>, <code>CreateDataSourceFromS3</code>, or <code>CreateDataSourceFromRedshift</code> operations. </p>',
  operationId: 'CreateMLModel',
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
        .literal('AmazonML_20141212.CreateMLModel')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonML_20141212.CreateMLModel'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateMLModelInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateMLModelOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonML20141212CreateRealtimeEndpointRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonML_20141212.CreateRealtimeEndpoint',
  description:
    'Creates a real-time endpoint for the <code>MLModel</code>. The endpoint contains the URI of the <code>MLModel</code>; that is, the location to send real-time prediction requests for the specified <code>MLModel</code>.',
  operationId: 'CreateRealtimeEndpoint',
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
        .literal('AmazonML_20141212.CreateRealtimeEndpoint')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonML_20141212.CreateRealtimeEndpoint'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateRealtimeEndpointInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateRealtimeEndpointOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonML20141212DeleteBatchPredictionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonML_20141212.DeleteBatchPrediction',
  description:
    '<p>Assigns the DELETED status to a <code>BatchPrediction</code>, rendering it unusable.</p> <p>After using the <code>DeleteBatchPrediction</code> operation, you can use the <a>GetBatchPrediction</a> operation to verify that the status of the <code>BatchPrediction</code> changed to DELETED.</p> <p> <b>Caution:</b> The result of the <code>DeleteBatchPrediction</code> operation is irreversible.</p>',
  operationId: 'DeleteBatchPrediction',
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
        .literal('AmazonML_20141212.DeleteBatchPrediction')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonML_20141212.DeleteBatchPrediction'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteBatchPredictionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteBatchPredictionOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonML20141212DeleteDataSourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonML_20141212.DeleteDataSource',
  description:
    '<p>Assigns the DELETED status to a <code>DataSource</code>, rendering it unusable.</p> <p>After using the <code>DeleteDataSource</code> operation, you can use the <a>GetDataSource</a> operation to verify that the status of the <code>DataSource</code> changed to DELETED.</p> <p> <b>Caution:</b> The results of the <code>DeleteDataSource</code> operation are irreversible.</p>',
  operationId: 'DeleteDataSource',
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
        .literal('AmazonML_20141212.DeleteDataSource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonML_20141212.DeleteDataSource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteDataSourceInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteDataSourceOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonML20141212DeleteEvaluationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonML_20141212.DeleteEvaluation',
  description:
    '<p>Assigns the <code>DELETED</code> status to an <code>Evaluation</code>, rendering it unusable.</p> <p>After invoking the <code>DeleteEvaluation</code> operation, you can use the <code>GetEvaluation</code> operation to verify that the status of the <code>Evaluation</code> changed to <code>DELETED</code>.</p> <p> <b>Caution:</b> The results of the <code>DeleteEvaluation</code> operation are irreversible.</p>',
  operationId: 'DeleteEvaluation',
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
        .literal('AmazonML_20141212.DeleteEvaluation')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonML_20141212.DeleteEvaluation'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteEvaluationInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteEvaluationOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonML20141212DeleteMLModelRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonML_20141212.DeleteMLModel',
  description:
    '<p>Assigns the <code>DELETED</code> status to an <code>MLModel</code>, rendering it unusable.</p> <p>After using the <code>DeleteMLModel</code> operation, you can use the <code>GetMLModel</code> operation to verify that the status of the <code>MLModel</code> changed to DELETED.</p> <p> <b>Caution:</b> The result of the <code>DeleteMLModel</code> operation is irreversible.</p>',
  operationId: 'DeleteMLModel',
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
        .literal('AmazonML_20141212.DeleteMLModel')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonML_20141212.DeleteMLModel'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteMLModelInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteMLModelOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonML20141212DeleteRealtimeEndpointRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonML_20141212.DeleteRealtimeEndpoint',
  description: 'Deletes a real time endpoint of an <code>MLModel</code>.',
  operationId: 'DeleteRealtimeEndpoint',
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
        .literal('AmazonML_20141212.DeleteRealtimeEndpoint')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonML_20141212.DeleteRealtimeEndpoint'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteRealtimeEndpointInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteRealtimeEndpointOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonML20141212DeleteTagsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonML_20141212.DeleteTags',
  description:
    "<p>Deletes the specified tags associated with an ML object. After this operation is complete, you can't recover deleted tags.</p> <p>If you specify a tag that doesn't exist, Amazon ML ignores it.</p>",
  operationId: 'DeleteTags',
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
        .literal('AmazonML_20141212.DeleteTags')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonML_20141212.DeleteTags'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteTagsInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteTagsOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'InvalidTagException',
      content: { 'application/json': { schema: InvalidTagExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonML20141212DescribeBatchPredictionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonML_20141212.DescribeBatchPredictions',
  description:
    'Returns a list of <code>BatchPrediction</code> operations that match the search criteria in the request.',
  operationId: 'DescribeBatchPredictions',
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
        .literal('AmazonML_20141212.DescribeBatchPredictions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonML_20141212.DescribeBatchPredictions'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
      content: { 'application/json': { schema: DescribeBatchPredictionsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeBatchPredictionsOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonML20141212DescribeDataSourcesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonML_20141212.DescribeDataSources',
  description:
    'Returns a list of <code>DataSource</code> that match the search criteria in the request.',
  operationId: 'DescribeDataSources',
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
        .literal('AmazonML_20141212.DescribeDataSources')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonML_20141212.DescribeDataSources'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
      content: { 'application/json': { schema: DescribeDataSourcesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeDataSourcesOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonML20141212DescribeEvaluationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonML_20141212.DescribeEvaluations',
  description:
    'Returns a list of <code>DescribeEvaluations</code> that match the search criteria in the request.',
  operationId: 'DescribeEvaluations',
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
        .literal('AmazonML_20141212.DescribeEvaluations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonML_20141212.DescribeEvaluations'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
      content: { 'application/json': { schema: DescribeEvaluationsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeEvaluationsOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonML20141212DescribeMLModelsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonML_20141212.DescribeMLModels',
  description:
    'Returns a list of <code>MLModel</code> that match the search criteria in the request.',
  operationId: 'DescribeMLModels',
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
        .literal('AmazonML_20141212.DescribeMLModels')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonML_20141212.DescribeMLModels'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
      content: { 'application/json': { schema: DescribeMLModelsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeMLModelsOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonML20141212DescribeTagsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonML_20141212.DescribeTags',
  description: 'Describes one or more of the tags for your Amazon ML object.',
  operationId: 'DescribeTags',
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
        .literal('AmazonML_20141212.DescribeTags')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonML_20141212.DescribeTags'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DescribeTagsInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeTagsOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonML20141212GetBatchPredictionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonML_20141212.GetBatchPrediction',
  description:
    'Returns a <code>BatchPrediction</code> that includes detailed metadata, status, and data file information for a <code>Batch Prediction</code> request.',
  operationId: 'GetBatchPrediction',
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
        .literal('AmazonML_20141212.GetBatchPrediction')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonML_20141212.GetBatchPrediction'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetBatchPredictionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBatchPredictionOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonML20141212GetDataSourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonML_20141212.GetDataSource',
  description:
    '<p>Returns a <code>DataSource</code> that includes metadata and data file information, as well as the current status of the <code>DataSource</code>.</p> <p> <code>GetDataSource</code> provides results in normal or verbose format. The verbose format adds the schema description and the list of files pointed to by the DataSource to the normal format.</p>',
  operationId: 'GetDataSource',
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
        .literal('AmazonML_20141212.GetDataSource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonML_20141212.GetDataSource'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetDataSourceInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDataSourceOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonML20141212GetEvaluationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonML_20141212.GetEvaluation',
  description:
    'Returns an <code>Evaluation</code> that includes metadata as well as the current status of the <code>Evaluation</code>.',
  operationId: 'GetEvaluation',
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
        .literal('AmazonML_20141212.GetEvaluation')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonML_20141212.GetEvaluation'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetEvaluationInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetEvaluationOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonML20141212GetMLModelRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonML_20141212.GetMLModel',
  description:
    '<p>Returns an <code>MLModel</code> that includes detailed metadata, data source information, and the current status of the <code>MLModel</code>.</p> <p> <code>GetMLModel</code> provides results in normal or verbose format. </p>',
  operationId: 'GetMLModel',
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
        .literal('AmazonML_20141212.GetMLModel')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonML_20141212.GetMLModel'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetMLModelInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetMLModelOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonML20141212PredictRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonML_20141212.Predict',
  description:
    '<p>Generates a prediction for the observation using the specified <code>ML Model</code>.</p> <p> <b>Note:</b> Not all response parameters will be populated. Whether a response parameter is populated depends on the type of model requested.</p>',
  operationId: 'Predict',
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
        .literal('AmazonML_20141212.Predict')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonML_20141212.Predict'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PredictInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PredictOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'PredictorNotMountedException',
      content: { 'application/json': { schema: PredictorNotMountedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonML20141212UpdateBatchPredictionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonML_20141212.UpdateBatchPrediction',
  description:
    '<p>Updates the <code>BatchPredictionName</code> of a <code>BatchPrediction</code>.</p> <p>You can use the <code>GetBatchPrediction</code> operation to view the contents of the updated data element.</p>',
  operationId: 'UpdateBatchPrediction',
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
        .literal('AmazonML_20141212.UpdateBatchPrediction')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonML_20141212.UpdateBatchPrediction'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateBatchPredictionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateBatchPredictionOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonML20141212UpdateDataSourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonML_20141212.UpdateDataSource',
  description:
    '<p>Updates the <code>DataSourceName</code> of a <code>DataSource</code>.</p> <p>You can use the <code>GetDataSource</code> operation to view the contents of the updated data element.</p>',
  operationId: 'UpdateDataSource',
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
        .literal('AmazonML_20141212.UpdateDataSource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonML_20141212.UpdateDataSource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateDataSourceInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateDataSourceOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonML20141212UpdateEvaluationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonML_20141212.UpdateEvaluation',
  description:
    '<p>Updates the <code>EvaluationName</code> of an <code>Evaluation</code>.</p> <p>You can use the <code>GetEvaluation</code> operation to view the contents of the updated data element.</p>',
  operationId: 'UpdateEvaluation',
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
        .literal('AmazonML_20141212.UpdateEvaluation')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonML_20141212.UpdateEvaluation'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateEvaluationInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateEvaluationOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonML20141212UpdateMLModelRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonML_20141212.UpdateMLModel',
  description:
    '<p>Updates the <code>MLModelName</code> and the <code>ScoreThreshold</code> of an <code>MLModel</code>.</p> <p>You can use the <code>GetMLModel</code> operation to view the contents of the updated data element.</p>',
  operationId: 'UpdateMLModel',
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
        .literal('AmazonML_20141212.UpdateMLModel')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonML_20141212.UpdateMLModel'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateMLModelInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateMLModelOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})
