<script>
  import { exercises, addExercise, updateExercise, deleteExercise } from '$lib/stores/exercises';
  let newName = '';
  let newCategory = '';
</script>

<h2>Exercises</h2>

<input placeholder="Exercise Name" bind:value={newName}/>
<input placeholder="Category" bind:value={newCategory}/>
<button on:click={() => { addExercise(newName,newCategory); newName=''; newCategory=''; }}>Add Exercise</button>

<ul>
  {#each $exercises as ex (ex.id)}
    <li>
      <input bind:value={ex.name} on:input={(e)=>updateExercise(ex.id,'name',e.target.value)}/>
      <input bind:value={ex.category} on:input={(e)=>updateExercise(ex.id,'category',e.target.value)}/>
      <button on:click={()=>deleteExercise(ex.id)}>Delete</button>
    </li>
  {/each}
</ul>
