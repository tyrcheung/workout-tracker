<script>
  import { exercises, addExercise, updateExercise, deleteExercise } from '$lib/stores/exercises';
  let newName = '';
  let newCategory = '';
</script>

<h2>Exercises</h2>

<label>Exercise Name: <input placeholder="Exercise Name" bind:value={newName}/></label>
<label>Category: <input placeholder="Category" bind:value={newCategory}/></label>
<button on:click={() => { addExercise(newName,newCategory); newName=''; newCategory=''; }}>Add Exercise</button>

<ul>
  {#each $exercises as ex (ex.id)}
    <li>
      <label>Exercise Name: <input bind:value={ex.name} on:input={(e)=>updateExercise(ex.id,'name',e.target.value)}/></label>
      <label>Category: <input bind:value={ex.category} on:input={(e)=>updateExercise(ex.id,'category',e.target.value)}/></label>
      <button on:click={()=>deleteExercise(ex.id)}>Delete</button>
    </li>
  {/each}
</ul>
