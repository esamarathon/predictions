const votes: { [x: string]: { [x: string]: number } } = {};

export async function storeVote(runId: string, username: string, vote: number) {
	if (!votes[runId]) {
		votes[runId] = {};
	}

	votes[runId][username] = vote;
}

export async function getVotes(runId: string) {
	return Object.values(votes[runId]).reduce<{ [x: number]: number }>((total, vote) => {
		total[vote] = total[vote] ? total[vote] + 1 : 1;
		return total;
	}, {});
}
