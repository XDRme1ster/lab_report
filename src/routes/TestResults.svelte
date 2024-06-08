<script>
// @ts-nocheck

    // This component receives the fileContents as a prop
    export let ReportData;
</script>
  
  <div class="bg-indigo-100 p-4 rounded mt-4">
    <h2 class="text-indigo-500 font-bold text-2xl">Test Results</h2>
    <table class="table-auto w-full">
      <thead>
        <tr>
          <th class="border border-indigo-500 px-4 py-2">Test Name</th>
          <th class="border border-indigo-500 px-4 py-2">Result</th>
          <th class="border border-indigo-500 px-4 py-2">Unit</th>
          <th class="border border-indigo-500 px-4 py-2">Reference Range</th>
        </tr>
      </thead>
      <tbody>
        {#each ReportData.test_results as test}
          <tr>
            <td class="border border-indigo-500 px-4 py-2">{test.name}</td>
            <td class="border border-indigo-500 px-4 py-2">{test.result}</td>
            <td class="border border-indigo-500 px-4 py-2">{test.unit}</td>
            <td class="border border-indigo-500 px-4 py-2">{test.reference_range}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
  