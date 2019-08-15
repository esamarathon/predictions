const votes: { [x: string]: { [x: string]: number } } = {}

export function runExists(runId: string) {
	return votes[runId] !== undefined
}

export async function storeVote(runId: string, username: string, vote: number) {
	if (!votes[runId]) {
		votes[runId] = {}
	}

	votes[runId][username] = vote
}

export async function getVotes(runId: string) {
	if (votes[runId] === undefined) {
		throw new Error('Run does not exist')
	}

	return Object.values(votes[runId]).reduce<{ [x: number]: number }>((total, vote) => {
		total[vote] = total[vote] ? total[vote] + 1 : 1
		return total
	}, {})
}
