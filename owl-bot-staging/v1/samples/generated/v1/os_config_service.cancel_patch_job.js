// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(name) {
  // [START osconfig_v1_generated_OsConfigService_CancelPatchJob_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Name of the patch in the form `projects/* /patchJobs/*`
   */
  // const name = 'abc123'

  // Imports the Osconfig library
  const {OsConfigServiceClient} = require('@google-cloud/os-config').v1;

  // Instantiates a client
  const osconfigClient = new OsConfigServiceClient();

  async function cancelPatchJob() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await osconfigClient.cancelPatchJob(request);
    console.log(response);
  }

  cancelPatchJob();
  // [END osconfig_v1_generated_OsConfigService_CancelPatchJob_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
