<script>
  import { exercises } from '$lib/stores/exercises';
  import { addSet, updateSet, deleteSet } from '$lib/stores/sessions';
  export let session;

  function getExerciseName(exId) {
    const ex = $exercises.find(e => e.id === exId);
    return ex ? ex.name : 'Unknown';
  }
</script>

<h4>Sets</h4>
{#if $exercises.length === 0}
  <p>No exercises available. Add an exercise first.</p>
{:else}
  <ul>
    {#each session.sets as set (set.id)}
      <li>
        <label>Exercise: <select value={set.exerciseId} on:change={(e)=>updateSet(session.id,set.id,'exerciseId',e.target.value)}>
          {#each $exercises as ex}
            <option value={ex.id}>{ex.name}</option>
          {/each}
        </select></label>
        <label>Reps: <input type="number" min="0" placeholder="0" value={set.reps} on:input={(e)=>updateSet(session.id,set.id,'reps',+e.target.value)}/></label>
        <label>Weight: <input type="number" min="0" placeholder="0" value={set.weight} on:input={(e)=>updateSet(session.id,set.id,'weight',+e.target.value)}/></label>
        <button on:click={()=>deleteSet(session.id,set.id)}>Delete Set</button>
      </li>
    {/each}
  </ul>

  <button on:click={()=>addSet(session.id,$exercises[0].id)}>Add Set</button>
{/if}
